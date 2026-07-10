import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "SharmaJi Store | Premium Quality & Lightning Fast Delivery",
  description: "Shop the best selection of electronics, grocery, and fashion items at SharmaJi Store. Enjoy low prices, great deals, and lightning fast delivery.",
  keywords: ["e-commerce", "shopping", "next.js store", "electronics", "online shop"],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "SharmaJi Store",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f52f8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900 antialiased font-sans" suppressHydrationWarning>
        <AuthProvider>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-500 text-white px-4 py-2 rounded-lg font-bold z-50">
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="flex-grow pt-16 md:pt-20">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
