"use server";

import z, { set } from "zod";
import { parse } from "cookie";
import { cookies } from "next/headers";

const loginUserValidationZodSchema = z.object({
  email: z.email({ error: "Email is required" }),
  password: z
    .string("Password is required")
    .min(6, {
      error: "Password is required and must be at least 6 characters long",
    })
    .max(100, {
      error: "Password must be at most 100 characters long",
    }),
});

export const loginUser = async (
  _currentState: any,
  formData: any
): Promise<any> => {
  try {
    let accessTokenObject: null | any = null;
    let refreshTokenObject: null | any = null;
    const loginData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const validationUserFields =
      loginUserValidationZodSchema.safeParse(loginData);

    if (!validationUserFields.success) {
      return {
        success: false,
        errors: validationUserFields.error.issues.map((issue) => {
          return {
            field: issue.path[0],
            message: issue.message,
          };
        }),
      };
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginData),
      credentials: "include",
    });

    const setCookieHeader = res.headers.getSetCookie();

    if (setCookieHeader && setCookieHeader.length > 0) {
      setCookieHeader.forEach((cookie: string) => {
        const parsedCookie = parse(cookie);

        if (parsedCookie["accessToken"]) {
          accessTokenObject = parsedCookie;
        }
        if (parsedCookie["refreshToken"]) {
          refreshTokenObject = parsedCookie;
        }
      });
    }

    if (!accessTokenObject) {
      throw new Error("accessToken not found!");
    }

    if (!refreshTokenObject) {
      throw new Error("refreshToken not found!");
    }

    const cookieStore = await cookies();

    cookieStore.set("accessToken", accessTokenObject.accessToken, {
      httpOnly: true,
      sameSite: true,
      maxAge: parseInt(accessTokenObject.maxAge),
      path: accessTokenObject.path || "/",
    });

    cookieStore.set("refreshToken", refreshTokenObject["refreshToken"], {
      httpOnly: true,
      sameSite: true,
      maxAge: parseInt(refreshTokenObject.maxAge),
      path: refreshTokenObject.path || "/",
    });

    const result = await res.json();
    return result;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message || "Login failed");
  }
};
