"use client";

import AuthButton from "@/components/ui/AuthButton";
import Image from "next/image";
import Link from "next/link";

export default function PatientSignUpPage() {
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
            Create Your Patient Account
          </h1>
          <p className="mt-2 text-sm font-medium text-orange-600 opacity-70">
            Experience the future of healthcare
          </p>
        </div>

        <form className="flex flex-col gap-1 w-full">
          {/* Name */}

          <label
            htmlFor="name"
            className="text-xs text-zinc-700 font-medium mt-8"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            autoComplete="name"
            className="h-9 px-3 text-sm rounded-md border border-zinc-300 focus:outline-orange-500"
          />

          {/* Email */}
          <label
            htmlFor="email"
            className="text-xs text-zinc-700 font-medium mt-4"
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
            autoComplete="new-password"
            className="h-9 px-3 text-sm rounded-md border border-zinc-300 focus:outline-orange-500"
          />

          <AuthButton className="mt-8">Sign Up</AuthButton>

          <p className="text-xs text-center mt-6">
            Have an Account?{" "}
            <Link
              href="/sign-in"
              className="text-orange-500 hover:underline font-medium"
            >
              Sign in
            </Link>
          </p>

          <p className="text-xs text-center mt-4 mb-16">
            By continuing, you acknowledge that you understand and agree to the{" "}
            <Link href="#" className="text-orange-500 font-medium">
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link href="/#" className="text-orange-500 font-medium">
              Privacy Policy
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
