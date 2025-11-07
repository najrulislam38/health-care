import LoginForm from "@/components/modules/Login/LoginForm";
import { Home } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
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

      <div className="flex items-center justify-center bg-gradient-to-br min-h-screen md:p-8 from-gray-50 to-gray-100 rounded-2xl">
        <div className="w-full max-w-96 bg-white/70 backdrop-blur-sm shadow-lg rounded-3xl p-8 space-y-6 border border-gray-200">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-900">
              Sign in with email
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
              Access your health records and appointments securely
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
