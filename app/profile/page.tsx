"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { User, Mail, Phone, MapPin, Edit3, Shield, CheckCircle2, AlertCircle } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { userService } from "@/services/user.service";
import { authService } from "@/services/auth.service";
import RequireAuth from "@/components/auth/RequireAuth";

function ProfileContent() {
  const { user, profile, refreshProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [isVerifying, setIsVerifying] = useState(false);
  const [verifySent, setVerifySent] = useState(false);



  if (!profile || !user) return null;

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      await userService.updateUser(profile.uid, {
        displayName,
        phone,
      });
      await refreshProfile();
      setSuccessMsg("Profile updated successfully!");
      setIsEditing(false);
    } catch (err: any) {
      setErrorMsg(err?.message || "Failed to update profile. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleResendVerification = async () => {
    setIsVerifying(true);
    setErrorMsg("");
    try {
      await authService.resendVerification();
      setVerifySent(true);
      setSuccessMsg("Verification email sent! Please check your inbox.");
    } catch (err: any) {
      setErrorMsg(err?.message || "Failed to send verification email. Please try again.");
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="py-10 bg-gray-50/50 min-h-screen">
      <Container className="max-w-4xl">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-8">My Profile</h1>

        {successMsg && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-700 text-sm font-semibold flex items-center gap-2">
            <CheckCircle2 size={16} />
            {successMsg}
          </div>
        )}

        {errorMsg && (
          <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl text-red-700 text-sm font-semibold flex items-center gap-2">
            <AlertCircle size={16} />
            {errorMsg}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* User Brief Card */}
          <div className="md:col-span-1 flex flex-col gap-6">
            <Card className="p-6 text-center flex flex-col items-center">
              {/* Profile Avatar & Upload Placeholder */}
              <div className="relative group">
                <div className="w-20 h-20 bg-primary-50 text-primary-500 rounded-full flex items-center justify-center mb-4 overflow-hidden border-2 border-primary-100">
                  {profile.photoURL ? (
                    <Image 
                      src={profile.photoURL} 
                      alt={profile.displayName} 
                      width={80}
                      height={80}
                      unoptimized
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User size={36} className="stroke-[1.5]" />
                  )}
                </div>
              </div>

              <h2 className="font-extrabold text-gray-800 text-lg">
                {profile.displayName || "Valued Customer"}
              </h2>
              
              <span className="text-xs bg-primary-50 text-primary-600 font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mt-1.5 flex items-center gap-1">
                <Shield size={12} />
                {profile.role}
              </span>

              {/* Photo Change Coming in Phase 5 Warning Label */}
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wide mt-4">
                Photo Update: Coming in Phase 5
              </p>
              
              <div className="border-t border-gray-100 w-full my-5" />
              
              {!isEditing ? (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full flex items-center justify-center gap-2 font-bold"
                  onClick={() => {
                    setDisplayName(profile.displayName || "");
                    setPhone(profile.phone || "");
                    setIsEditing(true);
                  }}
                >
                  <Edit3 size={14} />
                  Edit Profile
                </Button>
              ) : (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full font-bold text-gray-500 hover:text-gray-600"
                  onClick={() => {
                    setIsEditing(false);
                    setDisplayName(profile.displayName || "");
                    setPhone(profile.phone || "");
                  }}
                >
                  Cancel Edit
                </Button>
              )}
            </Card>
          </div>

          {/* User Complete Details */}
          <div className="md:col-span-2 flex flex-col gap-6">
            {/* Account Details Panel */}
            <Card className="p-6">
              <h3 className="text-base font-extrabold text-gray-800 border-b border-gray-100 pb-3 mb-6">
                Account Information
              </h3>
              
              {!isEditing ? (
                <div className="flex flex-col gap-4 text-sm font-semibold">
                  <div className="flex justify-between items-center py-2.5 border-b border-gray-50">
                    <span className="text-gray-400 font-bold text-[11px] uppercase tracking-wider">Email Address</span>
                    <span className="text-gray-800 flex items-center gap-1.5">
                      <Mail size={14} className="text-gray-400" />
                      {profile.email}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-gray-50">
                    <span className="text-gray-400 font-bold text-[11px] uppercase tracking-wider">Display Name</span>
                    <span className="text-gray-800">
                      {profile.displayName || "Not Configured"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-gray-50">
                    <span className="text-gray-400 font-bold text-[11px] uppercase tracking-wider">Phone Number</span>
                    <span className="text-gray-800 flex items-center gap-1.5">
                      <Phone size={14} className="text-gray-400" />
                      {profile.phone || "Not Configured"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2.5">
                    <span className="text-gray-400 font-bold text-[11px] uppercase tracking-wider">Verification Status</span>
                    <span className="flex items-center gap-1.5">
                      {user.emailVerified || profile.isVerified ? (
                        <span className="text-emerald-600 font-extrabold flex items-center gap-1">
                          <CheckCircle2 size={14} /> Verified
                        </span>
                      ) : (
                        <div className="flex items-center gap-3">
                          <span className="text-amber-600 font-extrabold flex items-center gap-1">
                            <AlertCircle size={14} /> Unverified
                          </span>
                          {!verifySent && (
                            <button
                              onClick={handleResendVerification}
                              disabled={isVerifying}
                              className="text-xs text-primary-500 hover:text-primary-600 font-bold underline disabled:opacity-50"
                            >
                              {isVerifying ? "Sending..." : "Verify Now"}
                            </button>
                          )}
                        </div>
                      )}
                    </span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSave} className="flex flex-col gap-4">
                  <div>
                    <Input
                      label="Email Address"
                      value={profile.email}
                      disabled
                    />
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1.5 ml-1">
                      Email address cannot be changed
                    </p>
                  </div>
                  <Input
                    label="Display Name"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Enter your name"
                    required
                  />
                  <Input
                    label="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                  />
                  <div className="flex justify-end gap-3 mt-4">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setIsEditing(false)}
                      disabled={isSaving}
                    >
                      Cancel
                    </Button>
                    <Button 
                      type="submit" 
                      variant="primary" 
                      disabled={isSaving}
                    >
                      {isSaving ? "Saving..." : "Save Changes"}
                    </Button>
                  </div>
                </form>
              )}
            </Card>

            {/* Address Book Placeholder */}
            <Card className="p-6">
              <h3 className="text-base font-extrabold text-gray-800 border-b border-gray-100 pb-3 mb-6 flex justify-between items-center">
                <span>Addresses</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wide">
                  Address Management Coming in Phase 3
                </span>
              </h3>
              
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-gray-50 text-gray-400 rounded-lg mt-0.5">
                  <MapPin size={18} />
                </div>
                <div className="text-sm font-medium text-gray-600">
                  <p className="font-extrabold text-gray-800 mb-1">
                    {profile.displayName || "No Address Saved"}
                  </p>
                  <p className="text-xs text-gray-400">
                    No shipping addresses have been configured yet.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <RequireAuth>
      <ProfileContent />
    </RequireAuth>
  );
}
