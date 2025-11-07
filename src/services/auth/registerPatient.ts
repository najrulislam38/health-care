"use server";

export const registerPatient = async (
  _currentState: any,
  formData: any
): Promise<any> => {
  try {
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
