"use server";

import z from "zod";

const registerZodSchema = z
  .object({
    name: z.string().min(1, { error: "Name is required" }),
    address: z.string().min(1, { error: "Address is required" }),
    email: z.email({ error: "Email is required" }),
    password: z
      .string("Password is required")
      .min(6, {
        error: "Password is required and must be at least 6 characters long",
      })
      .max(100, {
        error: "Password must be at most 100 characters long",
      }),

    confirmPassword: z.string().min(6, {
      error:
        "Confirm Password is required and must be at least 6 characters long",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

export const registerPatient = async (
  _currentState: any,
  formData: any
): Promise<any> => {
  try {
    const validateRegisterData = {
      name: formData.get("name"),
      address: formData.get("address"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    };

    const validationRegisterFields =
      registerZodSchema.safeParse(validateRegisterData);

    if (!validationRegisterFields.success) {
      return {
        success: false,
        errors: validationRegisterFields.error.issues.map((issue) => {
          return {
            field: issue.path[0],
            message: issue.message,
          };
        }),
      };
    }

    const registerData = {
      password: formData.get("password"),
      patient: {
        name: formData.get("name"),
        email: formData.get("email"),
        // phone: formData.get("phone"),
        address: formData.get("address"),
      },
    };

    const newFormData = new FormData();

    newFormData.append("data", JSON.stringify(registerData));

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/create-patient`,
      {
        method: "POST",
        body: newFormData,
        credentials: "include",
      }
    ).then((res) => res.json());

    console.log(res);
    return res;
  } catch (err: any) {
    console.log(err);
    throw new Error(err.message || "Registration failed");
  }
};
