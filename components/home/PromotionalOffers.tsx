import React from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function PromotionalOffers() {
  const offers = [
    {
      title: "Super Grocery Saver Pack",
      tagline: "SAVE FLAT 15%",
      description: "Get extra discounts on bulk household groceries and pantry staples.",
      code: "SHJGROCERY15",
      color: "from-green-500 to-teal-600",
      href: "/category/groceries"
    },
    {
      title: "Audio Gear Upgrade Deal",
      tagline: "EXTRA ₹1,500 OFF",
      description: "Upgrade to premium headphones and enjoy pure acoustic audio clarity.",
      code: "SHJAUDIO1500",
      color: "from-blue-600 to-indigo-700",
      href: "/category/electronics"
    }
  ];

  return (
    <section className="py-12 bg-white" aria-label="Promotional Offers">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offers.map((offer, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-2xl bg-gradient-to-r ${offer.color} text-white p-8 overflow-hidden shadow-soft flex flex-col justify-between min-h-[220px]`}
            >
              {/* Orb overlays */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none translate-x-1/4 -translate-y-1/4" />
              
              <div className="relative z-10 flex flex-col items-start gap-2 max-w-sm">
                <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-md text-[10px] font-black tracking-widest px-2.5 py-0.5 rounded-full uppercase">
                  <Sparkles size={10} />
                  {offer.tagline}
                </span>
                <h3 className="text-xl font-extrabold tracking-tight mt-1">{offer.title}</h3>
                <p className="text-xs text-white/80 leading-relaxed font-medium mt-1">
                  {offer.description}
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mt-6 pt-4 border-t border-white/10">
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-white/60 uppercase tracking-widest">Use Promo Code</span>
                  <span className="text-sm font-black tracking-wider text-accent-300 uppercase">{offer.code}</span>
                </div>
                <Link href={offer.href}>
                  <Button variant="ghost" size="sm" className="bg-white text-gray-800 hover:bg-gray-100 flex items-center gap-1.5 font-bold shadow-soft">
                    Shop Offer
                    <ArrowRight size={14} />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
