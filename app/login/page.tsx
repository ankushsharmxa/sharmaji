"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { Mail, Lock, LogIn, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.password) newErrors.password = "Password is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success Mock (Redirect can occur here)
    alert("Logged in successfully (Mock)!");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 bg-gray-50/50">
      <Card className="w-full max-w-md p-6 sm:p-8 bg-white relative">
        {/* Header with Logo */}
        <div className="flex flex-col items-center text-center mb-8">
          <Image 
            src="/logo.svg" 
            alt="SharmaJi Store" 
            width={180} 
            height={36} 
            className="h-9 w-auto mb-6"
          />
          <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">Welcome Back</h2>
          <p className="text-xs text-gray-400 mt-1 font-semibold uppercase tracking-wider">Log in to manage your orders</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Input
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
            placeholder="name@example.com"
          />

          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Password</label>
              <Link href="#" className="text-xs font-bold text-primary-500 hover:text-primary-600">Forgot Password?</Link>
            </div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              className={`w-full px-4 py-3 rounded-lg border bg-white text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500/20 ${
                errors.password ? "border-red-300 focus:border-red-500" : "border-gray-200 focus:border-primary-500"
              }`}
            />
            {errors.password && (
              <span className="text-xs text-red-500 font-medium">{errors.password}</span>
            )}
          </div>

          <Button type="submit" variant="primary" className="w-full mt-2 font-bold shadow-soft">
            Log In
          </Button>
        </form>

        {/* Form Footer */}
        <div className="text-center mt-6 text-sm text-gray-500 font-medium">
          Don't have an account?{" "}
          <Link href="/signup" className="text-primary-500 hover:text-primary-600 font-bold inline-flex items-center gap-1">
            Sign Up
            <ArrowRight size={14} />
          </Link>
        </div>
      </Card>
    </div>
  );
}
