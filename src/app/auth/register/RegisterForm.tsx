"use client";
import { InputField } from "@/app/components/InputField";
import { SubmitButton } from "@/app/components/SubmitButton";
import React from "react";

export default function RegisterForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    return (
        <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md flex-col space-y-4 rounded bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg"
        >
            <div className="flex flex-col items-center space-y-4">
                <h1 className="text-3xl font-bold">Register</h1>
                <p className="text-sm text-gray-500">
                    Already have an account?{" "}
                    <a href="/auth/login" className="text-red-500 hover:underline">
                        Login
                    </a>
                </p>
            </div>
            <div className="mt-8 flex flex-col space-y-4">
                <InputField
                    id="email"
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                />

                <InputField
                    id="password"
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
                />
                <InputField
                    id="password"
                    type="password"
                    label="Confirm Password"
                    placeholder="Confirm your password"
                />
            </div>
            <SubmitButton name="Register" />
        </form>
    );
}