"use client";

import { InputField } from "@/app/components/InputField";
import { SubmitButton } from "@/app/components/SubmitButton";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

type ServerError = {
    message: string;
};

export function ForgotPasswordForm() {
    const router = useRouter();
    const [error, setError] = useState<string[]>([]);
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");
        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                return router.push("/");
            }

            const payload: ServerError[] = await response.json();
            setError(payload.map(err => err.message));
        } catch (error) {
            console.error(error);
            setError(["An unknown error occurred"]);
        }
    };
    return (
        <form
            onSubmit={onSubmit}
            className="flex w-full max-w-md flex-col space-y-4 rounded bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg"
        >
            <div className="flex flex-col items-center space-y-4">
                <h1 className="text-3xl font-bold">Forgot Password</h1>
                <p className="text-sm text-gray-500">
                    Enter your email to reset your password
                </p>
            </div>
            <div className="mt-8 flex flex-col space-y-4">
                <InputField
                    id="email"
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                />
            </div>
            <SubmitButton name="Reset Password" />
        </form>
    );
}