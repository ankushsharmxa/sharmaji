"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { ArrowLeft, ArrowRight, User, AlertCircle, CheckCircle2 } from "lucide-react";
import { authService } from "@/services/auth.service";
import { getFriendlyErrorMessage } from "@/utils/firebaseErrors";
import RequireGuest from "@/components/auth/RequireGuest";

const signupSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(1, "Please confirm your password"),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the Terms & Conditions",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type SignupFormValues = z.infer<typeof signupSchema>;

function SignupContent() {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm<SignupFormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
    resolver: async (data) => {
      const result = signupSchema.safeParse(data);
      if (result.success) {
        return { values: result.data, errors: {} };
      }
      const formattedErrors = result.error.errors.reduce((acc, current) => {
        const path = current.path[0] as string;
        acc[path] = {
          type: "validation",
          message: current.message,
        };
        return acc;
      }, {} as Record<string, any>);
      return { values: {}, errors: formattedErrors };
    }
  });

  // Simple password strength calculation
  const getPasswordStrength = (pass: string) => {
    if (!pass) return { score: 0, label: "", color: "bg-gray-200" };
    let score = 0;
    if (pass.length >= 6) score += 1;
    if (pass.length >= 10) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;

    if (score <= 2) return { score, label: "Weak", color: "bg-red-500 w-1/3" };
    if (score <= 4) return { score, label: "Medium", color: "bg-amber-500 w-2/3" };
    return { score, label: "Strong", color: "bg-emerald-500 w-full" };
  };

  const strength = getPasswordStrength(passwordValue);

  const onSubmit = async (values: SignupFormValues) => {
    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      await authService.signUp(values.email, values.password, values.name);
      setSuccessMessage("Account created successfully! A verification email has been sent.");
    } catch (err: any) {
      setErrorMessage(getFriendlyErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 bg-gray-50/50">
      <Card className="w-full max-w-md p-6 sm:p-8 bg-white">
        {/* Header with Logo */}
        <div className="flex flex-col items-center text-center mb-6">
          <Link href="/" className="flex items-center gap-1.5 mb-6">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 flex items-center gap-1.5">
              <span className="bg-primary-600 text-white px-2 py-0.5 rounded-lg text-lg font-black shadow-md shadow-primary-500/20">SJ</span>
              <span>SHARMAJI</span>
              <span className="text-primary-600 font-extrabold">.</span>
            </span>
          </Link>
          <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">Create Account</h2>
          <p className="text-xs text-gray-400 mt-1 font-semibold uppercase tracking-wider">Join to enjoy super fast delivery</p>
        </div>

        {successMessage && (
          <div className="mb-4 p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-700 text-xs font-semibold flex items-center gap-2">
            <CheckCircle2 size={16} className="flex-shrink-0" />
            <span>{successMessage}</span>
          </div>
        )}

        {errorMessage && (
          <div className="mb-4 p-4 bg-red-50 border border-red-100 rounded-xl text-red-700 text-xs font-semibold flex items-center gap-2">
            <AlertCircle size={16} className="flex-shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Signup Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Input
            label="Full Name"
            type="text"
            placeholder="Ankus Sharma"
            error={errors.name?.message}
            {...register("name")}
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="name@example.com"
            error={errors.email?.message}
            {...register("email")}
          />

          <div className="flex flex-col gap-1">
            <Input
              label="Password"
              type="password"
              placeholder="Min. 6 characters"
              error={errors.password?.message}
              {...register("password", {
                onChange: (e) => setPasswordValue(e.target.value)
              })}
            />
            
            {/* Password Strength Indicator */}
            {passwordValue && (
              <div className="mt-1">
                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full transition-all duration-300 ${strength.color}`} />
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Password Strength</span>
                  <span className="text-[10px] font-extrabold uppercase text-gray-500">{strength.label}</span>
                </div>
              </div>
            )}
          </div>

          <Input
            label="Confirm Password"
            type="password"
            placeholder="Re-enter password"
            error={errors.confirmPassword?.message}
            {...register("confirmPassword")}
          />

          {/* Terms and Conditions Checkbox */}
          <div className="flex flex-col gap-1 mt-1">
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="acceptTerms"
                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 mt-0.5"
                {...register("acceptTerms")}
              />
              <label htmlFor="acceptTerms" className="text-xs font-bold text-gray-600 select-none leading-relaxed">
                I agree to the{" "}
                <Link href="#" className="text-primary-500 hover:text-primary-600 underline">Terms of Service</Link>
                {" "}and{" "}
                <Link href="#" className="text-primary-500 hover:text-primary-600 underline">Privacy Policy</Link>.
              </label>
            </div>
            {errors.acceptTerms && (
              <span className="text-xs text-red-500 font-semibold">{errors.acceptTerms.message}</span>
            )}
          </div>

          <Button 
            type="submit" 
            variant="primary" 
            className="w-full mt-2 font-bold shadow-soft flex items-center justify-center gap-2"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>Sign Up</span>
                <ArrowRight size={16} />
              </>
            )}
          </Button>
        </form>

        {/* Back Link */}
        <div className="text-center mt-6 text-sm text-gray-500 font-medium">
          Already have an account?{" "}
          <Link href="/login" className="text-primary-500 hover:text-primary-600 font-bold inline-flex items-center gap-1">
            Log In
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default function SignupPage() {
  return (
    <RequireGuest>
      <SignupContent />
    </RequireGuest>
  );
}
