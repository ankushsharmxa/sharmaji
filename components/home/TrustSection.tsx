import React from "react";
import Container from "@/components/layout/Container";
import { 
  ShieldCheck, 
  RotateCcw, 
  Truck, 
  Headphones, 
  BadgeCheck 
} from "lucide-react";

export default function TrustSection() {
  const features = [
    {
      title: "Secure Payments",
      description: "100% secure payment gateways with PCI-DSS compliance.",
      icon: ShieldCheck,
    },
    {
      title: "Easy Returns",
      description: "7-day hassle-free returns with doorstep pickup.",
      icon: RotateCcw,
    },
    {
      title: "Fast Delivery",
      description: "Next-day dispatch with live transit tracing.",
      icon: Truck,
    },
    {
      title: "Customer Support",
      description: "24/7 dedicated support via phone, email or chat.",
      icon: Headphones,
    },
    {
      title: "Quality Assurance",
      description: "Handpicked premium brands with strict quality protocols.",
      icon: BadgeCheck,
    },
  ];

  return (
    <section className="py-12 bg-white border-t border-gray-100" aria-label="Trust Badges">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx} 
                className="flex flex-col items-center text-center p-5 rounded-2xl hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="p-3.5 bg-primary-50 text-primary-500 rounded-2xl mb-4">
                  <Icon size={24} className="stroke-[1.8]" />
                </div>
                <h4 className="text-sm font-extrabold text-gray-900 mb-1.5">{feature.title}</h4>
                <p className="text-xs text-gray-400 font-medium leading-relaxed max-w-[200px]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
