import React from "react";
import Container from "@/components/layout/Container";
import { 
  ShieldCheck, 
  RotateCcw, 
  Truck, 
  BadgeCheck 
} from "lucide-react";

export default function TrustSection() {
  const features = [
    {
      title: "100% Genuine Products",
      description: "Direct source partners with verified authentication certificates.",
      icon: BadgeCheck,
    },
    {
      title: "Fast Delivery",
      description: "Quick shipping in metro areas.",
      icon: Truck,
    },
    {
      title: "Secure Payments",
      description: "PCI-DSS compliance checkout encryption protocols.",
      icon: ShieldCheck,
    },
    {
      title: "Easy Returns",
      description: "Hassle-free 7-day doorstep return pickup.",
      icon: RotateCcw,
    },
  ];

  return (
    <section className="py-12 bg-white border-t border-gray-100" aria-label="Trust Badges">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx} 
                className="flex flex-col items-center text-center p-5 rounded-xl hover:bg-slate-50 transition-colors duration-350"
              >
                <div className="p-3.5 bg-blue-50 text-primary-500 rounded-xl mb-4">
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
