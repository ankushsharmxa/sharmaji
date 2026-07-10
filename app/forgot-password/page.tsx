"use client";

import React, { useState } from "react";
import Link from "next/navigation";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import LinkComponent from "next/link";
import { Mail, ArrowLeft, CheckCircle2, AlertCircle } from "lucide-react";
import { authService } from "@/services/auth.service";
import { getFriendlyErrorMessage } from "@/utils/firebaseErrors";
import RequireGuest from "@/components/auth/RequireGuest";

function ForgotPasswordContent() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      await authService.forgotPassword(email);
      setSuccessMessage("Password reset email sent! Please check your inbox for instructions.");
      setEmail("");
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
          <LinkComponent href="/" className="flex items-center gap-1.5 mb-6">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 flex items-center gap-1.5">
              <span className="bg-primary-600 text-white px-2 py-0.5 rounded-lg text-lg font-black shadow-md shadow-primary-500/20">SJ</span>
              <span>SHARMAJI</span>
              <span className="text-primary-600 font-extrabold">.</span>
            </span>
          </LinkComponent>
          <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">Reset Password</h2>
          <p className="text-xs text-gray-400 mt-1 font-semibold uppercase tracking-wider">Recover access to your account</p>
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

        {!successMessage ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              label="Email Address"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

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
                  <Mail size={16} />
                  <span>Send Reset Link</span>
                </>
              )}
            </Button>
          </form>
        ) : (
          <div className="text-center mt-4">
            <p className="text-xs text-gray-500 leading-relaxed font-semibold">
              If the account exists, we have sent a link to reset your password. If you don&apos;t receive it in a few minutes, check your spam folder.
            </p>
          </div>
        )}

        {/* Back Link */}
        <div className="text-center mt-6 text-sm font-semibold">
          <LinkComponent 
            href="/login" 
            className="text-gray-500 hover:text-gray-700 font-bold inline-flex items-center gap-1.5"
          >
            <ArrowLeft size={14} />
            <span>Back to Login</span>
          </LinkComponent>
        </div>
      </Card>
    </div>
  );
}

export default function ForgotPasswordPage() {
  return (
    <RequireGuest>
      <ForgotPasswordContent />
    </RequireGuest>
  );
}
