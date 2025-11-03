"use client";

import { Button } from "../ui/button";
import { AuthSystem } from "@/utils/login";

export default function LogoutButton() {
  const handleLogout = async () => {
    try {
      const res = await AuthSystem.logoutUser();
      console.log("Logout success:", res);
      window.location.href = "/"; // redirect after logout
    } catch (err: any) {
      console.error("Logout failed:", err.message);
    }
  };

  return (
    <Button onClick={handleLogout} variant="destructive">
      Logout
    </Button>
  );
}
