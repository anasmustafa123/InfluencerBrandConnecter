"use client"; // needed if using form handlers or hooks in app dir

import { useState } from "react";

export default function LoginForm() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated backend call
    console.log("Logging in with:", { email, password });
    alert("Login attempt sent!");
};

return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-md">
    <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
    <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Email */}
        <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>

        {/* Password */}
        <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>

        {/* Submit */}
        <button
        type="submit"
        className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
        Sign In
        </button>
    </form>

    <p className="text-sm text-center text-gray-500">
        Don’t have an account?{" "}
        <a href="/signup" className="text-blue-600 hover:underline">
    Sign up
        </a>
    </p>
    </div>
);
}
