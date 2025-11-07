"use server";

import z from "zod";

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
    return res.json();
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message || "Login failed");
  }
};
