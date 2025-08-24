"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUser } from "@/lib/user";

const schema = Yup.object().shape({
name: Yup.string().required("Name is required"),
email: Yup.string()
    .email("Invalid email format")
    .matches(/\.com$/, "Email must end with .com")
    .required("Email is required"),
password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export default function SignUpForm() {
  const router = useRouter(); 
  const searchParams = useSearchParams();
  const role = searchParams.get("role"); 

const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm({
    resolver: yupResolver(schema),
});

const onSubmit = async (data) => {
    console.log("Sign Up Data:", data, role);

    // TODO: call your API here (fake success for now)
    // await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate request
    try {
        await createUser(data.name, data.email, data.password, role);   
        router.push("/login");
    } catch (error) {
        alert(error.message)
    }
};

return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">
        {role === "brand"
            ? "Sign Up as Brand"
            : "Sign Up as Influencer"}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
            <input
            type="text"
            placeholder="Name"
            {...register("name")}
            className="w-full p-2 border rounded"
            />
            <p className="text-red-500 text-sm">{errors.name?.message}</p>
        </div>
        <div>
            <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="w-full p-2 border rounded"
            />
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>
        <div>
            <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="w-full p-2 border rounded"
            />
            <p className="text-red-500 text-sm">{errors.password?.message}</p>
        </div>
        <div>
            <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
            className="w-full p-2 border rounded"
            />
            <p className="text-red-500 text-sm">
            {errors.confirmPassword?.message}
            </p>
        </div>
         {/* hidden input just in case you want role in the form */}
        <input type="hidden" value={role} {...register("role")} />
        <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
            {role === "brand"
            ? "Create Brand Account"
            : "Create Influencer Account"}
        </button>
        </form>
        <p className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500 hover:underline">
            Login
        </Link>
        </p>
    </div>
    </div>
);
}
