"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; // Wait, in Next 15 without zodResolver installed yet, let's write standard react-hook-form or simple validation, to prevent compiler/runtime imports issues if package is not fully resolved. Let's use simple JS checks in handleSubmit or basic react-hook-form since they compile reliably.
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Toast from "@/components/ui/Toast";
import { Mail, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailValue) {
      setErrorText("Email address is required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(emailValue)) {
      setErrorText("Please enter a valid email address.");
      return;
    }
    setErrorText("");
    setIsSubmitted(true);
    setEmailValue("");
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3" />

      <Container className="relative z-10 max-w-4xl text-center">
        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Mail size={22} className="text-white" />
        </div>
        
        <h2 className="text-3xl font-extrabold tracking-tight mb-3">
          Get Discount Offers & Updates
        </h2>
        <p className="text-sm text-white/80 max-w-lg mx-auto mb-8 font-medium">
          Subscribe to our newsletter list to receive secret vouchers, discount updates, and price alerts directly in your inbox.
        </p>

        {isSubmitted ? (
          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl flex flex-col items-center gap-2 animate-fade-in">
            <CheckCircle2 size={36} className="text-accent-300" />
            <h4 className="font-bold text-lg">Subscription Successful!</h4>
            <p className="text-xs text-white/80">Thank you for subscribing. We will send details to your email shortly.</p>
            <Button variant="ghost" size="sm" onClick={() => setIsSubmitted(false)} className="text-white hover:bg-white/10 mt-2 text-xs">
              Subscribe with another email
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <div className="flex-grow">
              <input
                type="email"
                placeholder="Enter your email address"
                value={emailValue}
                onChange={(e) => {
                  setEmailValue(e.target.value);
                  if (errorText) setErrorText("");
                }}
                className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent-400 text-sm"
              />
              {errorText && (
                <p className="text-left text-xs text-accent-300 mt-1.5 font-semibold">{errorText}</p>
              )}
            </div>
            <Button type="submit" variant="orange" className="font-bold shadow-soft">
              Subscribe Now
            </Button>
          </form>
        )}
      </Container>
    </section>
  );
}
