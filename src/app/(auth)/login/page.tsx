import { LoginForm } from "@/components/modules/Login/LoginForm";
import { Home } from "lucide-react";
import Link from "next/link";

export default function Login() {
  //     <div className="min-h-screen w-full relative">
  //   {/* Radial Gradient Background */}
  //   <div
  //     className="absolute inset-0 z-0"
  //     style={{
  //       background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
  //     }}
  //   />
  //      {/* Your Content/Components */}
  // </div>
  return (
    // <div className="min-h-screen w-full bg-white relative">
    //   {/* Teal Glow Background */}
    //   <div
    //     className="absolute inset-0 z-0"
    //     style={{
    //       backgroundImage: `
    //     radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #14b8a6 100%)
    //   `,
    //       backgroundSize: "100% 100%",
    //     }}
    //   />
    <div className="w-full min-h-screen overflow-hidden">
      {/* Logo */}
      <div className="absolute hidden md:block left-8 top-8 cursor-pointer z-10  ">
        <Link
          href={"/"}
          className="flex items-center gap-2 font-bold text-normal md:text-xl"
        >
          <Home size={32} className="text-primary" />
          <span>Health Care</span>
        </Link>
      </div>

      {/* Login Form Container - Responsive positioning */}
      <div className="flex items-center justify-center min-h-screen p-4 md:p-8">
        <LoginForm />
      </div>
    </div>
  );
}
