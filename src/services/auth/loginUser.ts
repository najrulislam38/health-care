"use server";

export const loginUser = async (
  _currentState: any,
  formData: any
): Promise<any> => {
  try {
    const loginData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
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
