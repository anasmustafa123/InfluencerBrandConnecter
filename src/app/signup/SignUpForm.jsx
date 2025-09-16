"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUser } from "@/lib/user";
import { createInfluencer } from "@/lib/influencer";
import { createBrand } from "@/lib/brands";

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
    try {
        let user_data = {};
        if (role === "brand") {
            const brand = await createBrand();
            console.log({brand});
            const brand_id = brand.success ? brand.data[0].id : null;
            
            user_data = await createUser(data.name, data.email, data.password, role, brand_id, null);  
        }else if (role === "influencer") {
            const influencer = await createInfluencer();
            const influencer_id = influencer.success ? influencer.data[0].id : null; 
            console.log({influencer});
            user_data = await createUser(data.name, data.email, data.password, role, null, influencer_id);
        }
        console.log({user_data});
        const res = await fetch("/api/user/jwt", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId: user_data[0].id,
                email: user_data[0].email,
                userRole: user_data[0].user_type,
                brand_id: user_data[0].brand_id,
                influencer_id: user_data[0].influencer_id,
            }),
        });
        const res_data = await res.json();
        const user_type = user_data[0].user_type
        if (res_data.success) {
            if (user_type === "brand") {
                router.push("/brandprofile");
            }else if (user_type === "influencer") {
                router.push("/influencerprofile");
            }
        }
        if (! res_data.success) {
            alert(res_data.message);
        }
        console.log({res_data}); 
        if (role === "brand") {
          router.push("/brandsetup");
        } else if (role === "influencer") {
          router.push("/influencersetup");
        }
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
