"use client";

import AuthButton from "@/components/ui/AuthButton";
import Image from "next/image";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="md:max-w-sm mx-auto min-h-screen flex flex-col justify-center my-24">
      <div className="shadow-[0px_20px_40px_0px_#00000024] rounded-lg p-8">
        <div>
          {/* Logo */}
          <Image
            src="/logo.png"
            alt="Logo"
            width={500}
            height={500}
            className="w-auto h-8"
          />

          <h1 className="mt-8 text-2xl font-bold text-orange-600">
            Welcome Back!
          </h1>
          <p className="mt-2 text-sm font-medium text-orange-600 opacity-70">
            Experience the future of healthcare
          </p>
        </div>

        <form className="flex flex-col gap-1 w-full">
          {/* Email */}
          <label
            htmlFor="email"
            className="text-xs text-zinc-700 font-medium mt-8"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            autoComplete="email"
            className="h-9 px-3 text-sm rounded-md border border-zinc-300 focus:outline-orange-500"
          />

          {/* Password */}
          <label
            htmlFor="password"
            className="text-xs text-zinc-700 font-medium mt-4"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            className="h-9 px-3 text-sm rounded-md border border-zinc-300 focus:outline-orange-500"
          />

          <AuthButton className="mt-8">Sign In</AuthButton>

          <p className="text-xs text-center mt-6">
            Don&apos;t have an account?{" "}
            <Link
              href="/sign-up/doctor"
              className="text-orange-500 hover:underline font-medium"
            >
              Sign up as a Doctor
            </Link>{" "}
            or{" "}
            <Link
              href="/sign-up/patient"
              className="text-orange-500 hover:underline font-medium"
            >
              Sign up as a Patient
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}