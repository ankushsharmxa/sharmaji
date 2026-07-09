"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { ArrowLeft, ArrowRight, User } from "lucide-react";

export default function SignupPage() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
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

    if (!formData.name) newErrors.name = "Full name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.password) newErrors.password = "Password is required.";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success Mock
    alert("Signed up successfully (Mock)!");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 bg-gray-50/50">
      <Card className="w-full max-w-md p-6 sm:p-8 bg-white">
        {/* Header with Logo */}
        <div className="flex flex-col items-center text-center mb-8">
          <Image 
            src="/logo.svg" 
            alt="SharmaJi Store" 
            width={180} 
            height={36} 
            className="h-9 w-auto mb-6"
          />
          <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">Create Account</h2>
          <p className="text-xs text-gray-400 mt-1 font-semibold uppercase tracking-wider">Join to enjoy super fast delivery</p>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            error={errors.name}
            placeholder="John Doe"
          />

          <Input
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
            placeholder="name@example.com"
          />

          <Input
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            error={errors.password}
            placeholder="Minimum 6 characters"
          />

          <Input
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            error={errors.confirmPassword}
            placeholder="Re-enter password"
          />

          <Button type="submit" variant="primary" className="w-full mt-4 font-bold shadow-soft">
            Create Account
          </Button>
        </form>

        {/* Form Footer */}
        <div className="text-center mt-6 text-sm text-gray-500 font-medium">
          Already have an account?{" "}
          <Link href="/login" className="text-primary-500 hover:text-primary-600 font-bold inline-flex items-center gap-1">
            Log In
            <ArrowRight size={14} />
          </Link>
        </div>
      </Card>
    </div>
  );
}
