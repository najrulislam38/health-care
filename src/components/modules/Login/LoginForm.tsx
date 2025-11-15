"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { loginUser } from "@/services/auth/loginUser";
import { Eye, EyeOff, Loader, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useActionState, useState } from "react";

export default function LoginForm({ redirect }: { redirect?: string }) {
  const [showPassword, setShowPassword] = useState(false);

  const [state, formAction, isPending] = useActionState(loginUser, null);
  // console.log(state);

  const getFieldError = (fieldName: string) => {
    if (state && state.errors) {
      const error = state.errors.find((err: any) => err.field === fieldName);
      return error.message;
    } else {
      return null;
    }
  };

  console.log("redirect from login form", redirect);
  return (
    <div className="w-full space-y-6">
      {/* Form */}

      <form action={formAction} className="space-y-5">
        <FieldGroup>
          {redirect && <input type="hidden" name="redirect" value={redirect} />}
          <div className="grid grid-cols-1 gap-4">
            {/* Email */}
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>

              <div className="relative">
                <Mail
                  className="absolute left-3 top-2 text-gray-400 size-5"
                  strokeWidth={2}
                />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="pl-10 bg-gray-50 border-gray-200"
                />
              </div>

              {getFieldError("email") && (
                <FieldDescription className="text-red-600">
                  {getFieldError("email")}
                </FieldDescription>
              )}
            </Field>

            {/* Password */}
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>

              <div className="relative">
                <Lock
                  className="absolute left-3 top-2 text-gray-400 size-5"
                  strokeWidth={2}
                />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="pl-10 pr-10 bg-gray-50 border-gray-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="size-5" />
                  ) : (
                    <Eye className="size-5" />
                  )}
                </button>
              </div>
              {getFieldError("password") && (
                <FieldDescription className="text-red-600">
                  {getFieldError("password")}
                </FieldDescription>
              )}
            </Field>
          </div>
        </FieldGroup>

        {/* Forgot Password */}
        <div className="text-right">
          <button
            type="button"
            onClick={() => console.log("Forgot password clicked")}
            className="text-sm text-gray-700 hover:text-gray-900"
          >
            Forgot password?
          </button>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full rounded-lg py-2.5"
          disabled={isPending}
        >
          {isPending && (
            <Loader className="size-5 mr-2 animate-spin inline-block" />
          )}
          Get Started
        </Button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-2">
        <div className="flex-grow h-px bg-gray-300"></div>
        <span className="text-sm text-gray-500">Or sign in with</span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

      {/* Social Login */}
      <div className="flex justify-center gap-4">
        <Button
          type="button"
          variant="outline"
          // onClick={() => handleSocialLogin("Google")}
        >
          Google
        </Button>
        <Button
          type="button"
          variant="outline"
          // onClick={() => handleSocialLogin("Facebook")}
        >
          Facebook
        </Button>
        <Button
          type="button"
          variant="outline"
          // onClick={() => handleSocialLogin("Github")}
        >
          GitHub
        </Button>
      </div>

      <div>
        {/* <p>Already have an account? <Link href="/login" className="text-blue-500 hover:underline">Log in</Link></p> */}
        <p className="text-sm text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
