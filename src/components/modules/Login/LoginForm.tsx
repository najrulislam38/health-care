"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { loginUser } from "@/services/auth/loginUser";
import { Eye, EyeOff, Loader, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useActionState, useState } from "react";

// import { useState } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { Eye, EyeOff, Mail, Lock, Loader } from "lucide-react";
// import { useForm } from "react-hook-form";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import checkAuth from "@/utils/auth";
// import { useRouter } from "next/navigation";
// import { AuthSystem } from "@/utils/login";

// // ✅ Zod schema for validation
// const loginSchema = z.object({
//   email: z.string().email({ message: "Please enter a valid email address" }),
//   password: z
//     .string()
//     .min(6, { message: "Password must be at least 6 characters" }),
// });

// type LoginFormValues = z.infer<typeof loginSchema>;

// export function LoginForm() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();

//   const form = useForm<LoginFormValues>({
//     resolver: zodResolver(loginSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   const onSubmit = async (data: LoginFormValues) => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       // Simulate login API call
//       const result = await AuthSystem.loginUser(data.email, data.password);
//       console.log("response form loginForm", result);
//       if (result.success) {
//         const authorized = await checkAuth();

//         const { role } = authorized.user;
//         if (authorized.isAuthenticated && authorized.user) {
//           switch (role) {
//             case "ADMIN":
//               router.push("/dashboard");
//               break;
//             case "DOCTOR":
//               router.push("/dashboard");
//               break;
//             case "PATIENT":
//               router.push("/dashboard");
//               break;
//             default:
//               router.push("/dashboard");
//               break;
//           }
//         } else {
//           setError("Authentication failed after login.");
//         }
//       } else {
//         setError("Failed to retrieve user information after login.");
//       }
//     } catch (error: any) {
//       setError(error.message || "Login failed. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSocialLogin = (provider: string) => {
//     console.log(`Login with ${provider}`);
//   };

//   return (
//     <div className="w-full space-y-6">
//       {error && <div className="text-red-500 text-sm text-center">{error}</div>}

//       {/* Form */}
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
//           {/* Email Field */}
//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <div className="relative">
//                     <Mail
//                       className="absolute left-3 top-2 text-gray-400 size-5"
//                       strokeWidth={2}
//                     />
//                     <Input
//                       type="email"
//                       placeholder="Email"
//                       className="pl-10 bg-gray-50 border-gray-200"
//                       {...field}
//                     />
//                   </div>
//                 </FormControl>
//                 <FormMessage className="text-xs text-red-500" />
//               </FormItem>
//             )}
//           />

//           {/* Password Field */}
//           <FormField
//             control={form.control}
//             name="password"
//             render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <div className="relative">
//                     <Lock
//                       className="absolute left-3 top-2 text-gray-400 size-5"
//                       strokeWidth={2}
//                     />
//                     <Input
//                       type={showPassword ? "text" : "password"}
//                       placeholder="Password"
//                       className="pl-10 pr-10 bg-gray-50 border-gray-200"
//                       {...field}
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-3 top-2 text-gray-400 hover:text-gray-600"
//                     >
//                       {showPassword ? (
//                         <EyeOff className="size-5" />
//                       ) : (
//                         <Eye className="size-5" />
//                       )}
//                     </button>
//                   </div>
//                 </FormControl>
//                 <FormMessage className="text-xs text-red-500" />
//               </FormItem>
//             )}
//           />

//           {/* Forgot Password */}
//           <div className="text-right">
//             <button
//               type="button"
//               onClick={() => console.log("Forgot password clicked")}
//               className="text-sm text-gray-700 hover:text-gray-900"
//             >
//               Forgot password?
//             </button>
//           </div>

//           {/* Submit Button */}
//           <Button
//             type="submit"
//             className="w-full rounded-lg py-2.5"
//             disabled={isLoading}
//           >
//             {isLoading && (
//               <Loader className="size-5 mr-2 animate-spin inline-block" />
//             )}
//             Get Started
//           </Button>
//         </form>
//       </Form>

//       {/* Divider */}
//       <div className="flex items-center gap-2">
//         <div className="flex-grow h-px bg-gray-300"></div>
//         <span className="text-sm text-gray-500">Or sign in with</span>
//         <div className="flex-grow h-px bg-gray-300"></div>
//       </div>

//       {/* Social Login */}
//       <div className="flex justify-center gap-4">
//         <Button
//           type="button"
//           variant="outline"
//           onClick={() => handleSocialLogin("Google")}
//         >
//           Google
//         </Button>
//         <Button
//           type="button"
//           variant="outline"
//           onClick={() => handleSocialLogin("Facebook")}
//         >
//           Facebook
//         </Button>
//         <Button
//           type="button"
//           variant="outline"
//           onClick={() => handleSocialLogin("Github")}
//         >
//           GitHub
//         </Button>
//       </div>

//       <div>
//         {/* <p>Already have an account? <Link href="/login" className="text-blue-500 hover:underline">Log in</Link></p> */}
//         <p className="text-sm text-center text-gray-600">
//           Don&apos;t have an account?{" "}
//           <Link href="/register" className="text-blue-500 hover:underline">
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const [state, formAction, isPending] = useActionState(loginUser, null);
  console.log(state);
  return (
    <div className="w-full space-y-6">
      {/* Form */}

      <form action={formAction} className="space-y-5">
        <FieldGroup>
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

              {/* {getFieldError("email") && (
              <FieldDescription className="text-red-600">
                {getFieldError("email")}
              </FieldDescription>
            )} */}
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
              {/* {getFieldError("password") && (
              <FieldDescription className="text-red-600">
                {getFieldError("password")}
              </FieldDescription>
            )} */}
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
