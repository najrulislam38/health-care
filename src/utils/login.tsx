const loginUser = async (email: string, password: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });

    const data = await res.json();

    return data;
  } catch (error: any) {
    throw new Error(error.message || "Login failed");
  }
};

const logoutUser = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    });
    const data = await res.json();
    return data;
  } catch (err: any) {
    throw new Error(err.message || "Logout failed");
  }
};

export const AuthSystem = {
  loginUser,
  logoutUser,
};
