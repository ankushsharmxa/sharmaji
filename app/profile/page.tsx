import React from "react";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { User, Mail, Phone, MapPin, Edit3, Settings, Shield } from "lucide-react";

export default function ProfilePage() {
  const mockUser = {
    name: "Ankus Sharma",
    email: "ankus@example.com",
    phone: "+91 98765 43210",
    role: "Premium Customer",
    address: {
      street: "123, VIP Main Road, Sector 5",
      city: "Kolkata",
      state: "West Bengal",
      zip: "700091",
      country: "India"
    }
  };

  return (
    <div className="py-10 bg-gray-50/50 min-h-screen">
      <Container className="max-w-4xl">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-8">My Profile</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* User Brief Card */}
          <div className="md:col-span-1 flex flex-col gap-6">
            <Card className="p-6 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-primary-50 text-primary-500 rounded-full flex items-center justify-center mb-4">
                <User size={36} className="stroke-[1.5]" />
              </div>
              <h2 className="font-extrabold text-gray-800 text-lg">{mockUser.name}</h2>
              <span className="text-xs bg-primary-50 text-primary-600 font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mt-1.5">
                {mockUser.role}
              </span>
              
              <div className="border-t border-gray-100 w-full my-6" />
              
              <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2">
                <Edit3 size={14} />
                Edit Profile
              </Button>
            </Card>
          </div>

          {/* User Complete Details */}
          <div className="md:col-span-2 flex flex-col gap-6">
            
            {/* Account Details Panel */}
            <Card className="p-6">
              <h3 className="text-base font-extrabold text-gray-800 border-b border-gray-100 pb-3 mb-6">
                Account Information
              </h3>
              
              <div className="flex flex-col gap-4 text-sm font-semibold">
                <div className="flex justify-between items-center py-2.5 border-b border-gray-50">
                  <span className="text-gray-400 font-bold text-[11px] uppercase tracking-wider">Email Address</span>
                  <span className="text-gray-800 flex items-center gap-1.5">
                    <Mail size={14} className="text-gray-400" />
                    {mockUser.email}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2.5 border-b border-gray-50">
                  <span className="text-gray-400 font-bold text-[11px] uppercase tracking-wider">Phone Number</span>
                  <span className="text-gray-800 flex items-center gap-1.5">
                    <Phone size={14} className="text-gray-400" />
                    {mockUser.phone}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2.5">
                  <span className="text-gray-400 font-bold text-[11px] uppercase tracking-wider">Default Language</span>
                  <span className="text-gray-800">English (IN)</span>
                </div>
              </div>
            </Card>

            {/* Address Book Panel */}
            <Card className="p-6">
              <h3 className="text-base font-extrabold text-gray-800 border-b border-gray-100 pb-3 mb-6 flex justify-between items-center">
                <span>Primary Address</span>
                <button className="text-xs font-bold text-primary-500 hover:text-primary-600">Change</button>
              </h3>
              
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-gray-50 text-gray-400 rounded-lg mt-0.5">
                  <MapPin size={18} />
                </div>
                <div className="text-sm font-medium text-gray-600">
                  <p className="font-extrabold text-gray-800 mb-1">{mockUser.name}</p>
                  <p>{mockUser.address.street}</p>
                  <p>{mockUser.address.city}, {mockUser.address.state} - {mockUser.address.zip}</p>
                  <p className="mt-1 font-bold text-gray-400">{mockUser.address.country}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
