"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

// ✅ Define Yup schema
const schema = Yup.object().shape({
email: Yup.string()
    .email("Invalid email format")
    .matches(/\.com$/, "Email must end with .com")
    .required("Email is required"),
password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function LoginForm() {
    const searchParams = useSearchParams();
    const role = searchParams.get("role");
    
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

const onSubmit = async (data) => {

    const res = await fetch("/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email, password: data.password }),
    });

    const res_data = await res.json();
    console.log({res_data_anas: res_data})
    if (res_data.success) {
        if (res_data.data.userRole === "brand") {
            router.push("/brandprofile");
        }else if (res_data.data.userRole === "influencer") {
            router.push("/influencerprofile");
        }
    }
    if (! res_data.success) {
        alert(res_data.message);
    }
    console.log({res_data}); 
  };

return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label className="block text-sm font-medium text-gray-700">
            Email
            </label>
            <input
            type="email"
            {...register("email")}
            className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
            <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
            </p>
            )}
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">
            Password
            </label>
            <input
            type="password"
            {...register("password")}
            className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
            <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
            </p>
            )}
        </div>
        <button
            type="submit"
            className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
            Sign In
        </button>
        </form>

        <p className="text-sm text-gray-600 text-center">
        Don’t have an account?{" "}
        <Link href="/signup" className="text-blue-500 hover:underline">
            Sign Up
        </Link>
        </p>
    </div>
    </div>
);
}
