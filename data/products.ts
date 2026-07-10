import { Product } from "@/types";

export const PRODUCTS: Product[] = [
  {
    id: "el-1",
    name: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
    slug: "sony-wh-1000xm4",
    sku: "SNY-WH1000XM4-BLK",
    brand: "Sony",
    modelNumber: "WH-1000XM4/B",
    description: "Industry-leading noise canceling with Dual Noise Sensor technology. Next-level music with Edge-AI, co-developed with Sony Music Studios Tokyo. Up to 30-hour battery life with quick charging (10-min charge for 5 hours of playback). Touch sensor controls to pause, play, skip tracks, control volume, activate your voice assistant, and answer phone calls.",
    shortDescription: "Industry-leading Active Noise Cancellation headphones with 30hr battery life.",
    price: 19990,
    originalPrice: 29990,
    discountPercentage: 33,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=80"
    ],
    category: "headphones",
    stock: 14,
    stockCount: 14,
    rating: 4.8,
    reviewsCount: 142,
    ratingCount: 142,
    featured: true,
    createdAt: "2026-06-01T12:00:00Z",
    specs: {
      "Brand": "Sony",
      "Model": "WH-1000XM4",
      "Battery Life": "30 Hours",
      "Bluetooth": "5.0",
      "ANC": "Yes (Industry Leading Dual Sensor)",
      "Driver Unit": "40mm Dome Type",
      "Frequency Response": "4Hz - 40,000Hz"
    },
    warranty: "1 Year Manufacturer Brand Warranty",
    deliveryTime: "FREE Delivery by Tomorrow",
    features: [
      "Industry-leading Active Noise Cancellation (ANC)",
      "Speak-to-chat technology automatically reduces volume during conversations",
      "Wearing sensor detects when headphones are removed to pause playback",
      "Multipoint connection allows pairing with two Bluetooth devices simultaneously"
    ],
    reviews: [
      {
        id: "rev-1-1",
        productId: "el-1",
        userId: "usr-101",
        userName: "Aarav Mehta",
        rating: 5,
        comment: "Absolutely outstanding noise cancellation. Perfect for office environments and travel.",
        createdAt: "2026-06-15T09:30:00Z"
      },
      {
        id: "rev-1-2",
        productId: "el-1",
        userId: "usr-102",
        userName: "Neha Sharma",
        rating: 4,
        comment: "Excellent sound stage, very comfortable for long hours. Multi-device pairing works smoothly.",
        createdAt: "2026-06-20T14:45:00Z"
      }
    ]
  },
  {
    id: "el-2",
    name: "Anker 735 GaNPrime 65W Fast Wall Charger",
    slug: "anker-735-ganprime-65w",
    sku: "ANK-735-GAN65-GRY",
    brand: "Anker",
    modelNumber: "A2668",
    description: "Power 3 devices at once with 2 USB-C ports and one USB-A port. Connect a single device to charge at up to 65W—that's enough to power up a 2020 MacBook Pro 13 inch at full speed. Our exclusive ActiveShield 2.0 safety technology monitoring system safeguards your devices by intelligently checking temperatures over 3 million times per day.",
    shortDescription: "Ultra-compact 65W GaN charger with 3 outputs (2x USB-C, 1x USB-A).",
    price: 3299,
    originalPrice: 4999,
    discountPercentage: 34,
    images: [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1611532736597-ebb2d416853e?auto=format&fit=crop&w=600&q=80"
    ],
    category: "chargers",
    stock: 25,
    stockCount: 25,
    rating: 4.7,
    reviewsCount: 89,
    ratingCount: 89,
    featured: true,
    createdAt: "2026-06-05T12:00:00Z",
    specs: {
      "Brand": "Anker",
      "Wattage": "65W Max",
      "Ports": "2x USB-C, 1x USB-A",
      "Technology": "GaNPrime Power Delivery 3.0",
      "Dimensions": "1.50 x 1.15 x 2.60 inches",
      "Weight": "132g"
    },
    warranty: "18 Months Anker India Warranty",
    deliveryTime: "FREE Delivery by Tomorrow",
    features: [
      "GaNPrime Technology for higher efficiency and smaller footprint",
      "ActiveShield 2.0 real-time temperature monitoring protection",
      "PowerIQ 4.0 dynamic power distribution for connected devices"
    ],
    reviews: [
      {
        id: "rev-2-1",
        productId: "el-2",
        userId: "usr-201",
        userName: "Vikram Sen",
        rating: 5,
        comment: "Super compact and handles my MacBook Air and iPhone simultaneously without heating up.",
        createdAt: "2026-06-10T11:20:00Z"
      }
    ]
  },
  {
    id: "el-3",
    name: "JBL Flip 6 Portable Waterproof Bluetooth Speaker",
    slug: "jbl-flip-6",
    sku: "JBL-FLIP6-BLU-PRM",
    brand: "JBL",
    modelNumber: "FLIP6BLUAM",
    description: "The JBL Flip 6 2-way speaker system is engineered to deliver loud, crystal clear, powerful sound. Its racetrack-shaped woofer delivers exceptional low frequencies and midrange, while a separate tweeter produces crisp, clear high-frequencies. Flip 6 also features optimized dual passive radiators for deep bass, fine-tuned with using Harman's advanced algorithm. IP67 waterproof and dustproof.",
    shortDescription: "IP67 waterproof outdoor speaker with 2-way acoustic design and 12hr battery.",
    price: 9999,
    originalPrice: 14999,
    discountPercentage: 33,
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=600&q=80"
    ],
    category: "speakers",
    stock: 19,
    stockCount: 19,
    rating: 4.6,
    reviewsCount: 110,
    ratingCount: 110,
    featured: true,
    createdAt: "2026-06-12T12:00:00Z",
    specs: {
      "Brand": "JBL",
      "Power Output": "20W RMS (Woofer) + 10W RMS (Tweeter)",
      "Waterproofing": "IP67 Dust & Waterproof",
      "Battery Life": "12 Hours",
      "Bluetooth Version": "5.1",
      "Charging Time": "2.5 Hours"
    },
    warranty: "1 Year JBL India Warranty",
    deliveryTime: "FREE Delivery by Monday",
    features: [
      "Loud, powerful 2-way speaker configuration",
      "IP67 dustproof and waterproof design for outdoor use",
      "PartyBoost allows pairing multiple compatible speakers for stereo sound",
      "Eco-friendly packaging and materials"
    ],
    reviews: [
      {
        id: "rev-3-1",
        productId: "el-3",
        userId: "usr-301",
        userName: "Karan Johar",
        rating: 5,
        comment: "Excellent punchy bass for its size. Take it to the pool all the time, completely waterproof.",
        createdAt: "2026-06-18T16:05:00Z"
      }
    ]
  },
  {
    id: "el-4",
    name: "Anker PowerCore 24K 20000mAh Power Bank (140W PD)",
    slug: "anker-powercore-24k",
    sku: "ANK-PCORE-24K-PD140",
    brand: "Anker",
    modelNumber: "A1289",
    description: "Equipped with the latest Power Delivery 3.1 and bi-directional technology to quickly recharge the portable charger or get a 140W ultra-powerful charge. Features a 20,000mAh battery capacity with smart digital display showing input/output power, battery level, and remaining recharge time.",
    shortDescription: "Ultra-high-output 140W PD Power Bank with digital smart display.",
    price: 9999,
    originalPrice: 15999,
    discountPercentage: 37,
    images: [
      "https://images.unsplash.com/photo-1609592424089-9a76d8b6fd70?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?auto=format&fit=crop&w=600&q=80"
    ],
    category: "power-banks",
    stock: 30,
    stockCount: 30,
    rating: 4.8,
    reviewsCount: 74,
    ratingCount: 74,
    featured: false,
    createdAt: "2026-06-18T12:00:00Z",
    specs: {
      "Brand": "Anker",
      "Capacity": "24,000 mAh (Nominal 20,000mAh)",
      "Max Output": "140W Power Delivery 3.1",
      "Ports": "2x USB-C, 1x USB-A",
      "Display": "Color Smart Digital LCD Screen"
    },
    warranty: "24 Months Brand Replacement Warranty",
    deliveryTime: "FREE Delivery by Tomorrow",
    features: [
      "Ultra-powerful 140W Bi-directional Power Delivery 3.1",
      "Smart digital display tracks battery status and input/output wattage",
      "ActiveShield 2.0 advanced safety monitoring system"
    ],
    reviews: [
      {
        id: "rev-4-1",
        productId: "el-4",
        userId: "usr-401",
        userName: "Rohit Verma",
        rating: 5,
        comment: "Charges my MacBook Pro at full speed. Absolutely worth the premium price tag.",
        createdAt: "2026-06-25T18:12:00Z"
      }
    ]
  },
  {
    id: "el-5",
    name: "OnePlus Buds 3 TWS Active Noise Cancelling Earbuds",
    slug: "oneplus-buds-3",
    sku: "OP-BUDS3-BLU-ANC",
    brand: "OnePlus",
    modelNumber: "E509A",
    description: "Featuring a dual dynamic driver system (10.4mm woofer + 6mm tweeter), the OnePlus Buds 3 deliver immersive high-fidelity audio. Enjoy deep bass and sparkling treble, paired with up to 49dB of Smart Adaptive Noise Cancellation that analyzes ambient sound in real-time.",
    shortDescription: "TWS earbuds featuring dual drivers, 49dB adaptive ANC, and LHDC 5.0 audio.",
    price: 4999,
    originalPrice: 6999,
    discountPercentage: 28,
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=600&q=80"
    ],
    category: "earbuds",
    stock: 22,
    stockCount: 22,
    rating: 4.7,
    reviewsCount: 154,
    ratingCount: 154,
    featured: true,
    createdAt: "2026-06-20T12:00:00Z",
    specs: {
      "Brand": "OnePlus",
      "Battery Life": "44 Hours (with Charging Case, ANC off)",
      "IP Rating": "IP55 Dust & Water Resistant",
      "ANC Depth": "Up to 49dB Adaptive",
      "Drivers": "10.4mm Woofer + 6mm Tweeter Dual Drivers",
      "Codec Support": "LHDC 5.0, AAC, SBC"
    },
    warranty: "1 Year Brand Warranty",
    deliveryTime: "FREE Delivery by Tomorrow",
    features: [
      "Dual Dynamic Drivers for balanced high-fidelity sound",
      "Up to 49dB smart adaptive active noise cancellation",
      "Ultra-low latency gaming mode (94ms)",
      "Fast charging: 10 minutes gives up to 7 hours of playback"
    ],
    reviews: [
      {
        id: "rev-5-1",
        productId: "el-5",
        userId: "usr-501",
        userName: "Sonia Das",
        rating: 5,
        comment: "Excellent sound detail with dual drivers. Bass is deep and punchy, and the blue color looks premium.",
        createdAt: "2026-06-28T09:15:00Z"
      }
    ]
  },
  {
    id: "el-6",
    name: "UGREEN 100W USB-C to USB-C Braided Cable (2m)",
    slug: "ugreen-100w-cable-2m",
    sku: "UGR-100W-USBC-2M",
    brand: "UGREEN",
    modelNumber: "US316",
    description: "UGREEN USB-C to USB-C cable supports Power Delivery fast charging up to 100W (20V/5A). Made of premium nylon-braided jacket and reinforced aluminum connector joints, this cable offers extreme durability, capable of withstanding over 10,000 bends.",
    shortDescription: "Ultra-durable 2-meter nylon braided charging cable supporting 100W Power Delivery.",
    price: 699,
    originalPrice: 1299,
    discountPercentage: 46,
    images: [
      "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80"
    ],
    category: "cables",
    stock: 120,
    stockCount: 120,
    rating: 4.8,
    reviewsCount: 312,
    ratingCount: 312,
    featured: false,
    createdAt: "2026-06-25T12:00:00Z",
    specs: {
      "Brand": "UGREEN",
      "Length": "2 Meters (6.6 ft)",
      "Max Power": "100W PD (20V / 5A)",
      "Data Rate": "USB 2.0 (480 Mbps)",
      "Material": "Double Nylon Braided + Aluminum Alloy Shell"
    },
    warranty: "6 Months Brand Warranty",
    deliveryTime: "FREE Delivery by Tomorrow",
    features: [
      "Supports 100W Power Delivery (PD) fast charging",
      "Premium nylon braided cable with 10,000+ bend lifespan",
      "Built-in E-marker chip ensures safe and stable power output"
    ],
    reviews: [
      {
        id: "rev-6-1",
        productId: "el-6",
        userId: "usr-601",
        userName: "Devang Patel",
        rating: 5,
        comment: "Very high quality cable. Charges my laptop quickly and the 2m length is very convenient.",
        createdAt: "2026-07-01T14:30:00Z"
      }
    ]
  },
  {
    id: "el-7",
    name: "Portronics My Buddy K Adjustable Laptop Stand",
    slug: "portronics-my-buddy-k",
    sku: "POR-MYBUDDYK-ALUM",
    brand: "Portronics",
    modelNumber: "POR-1311",
    description: "Keep your workspace ergonomic with the Portronics My Buddy K. Made of high-grade anodized aluminum alloy, it features 6 adjustable angle settings to bring your laptop screen to eye level. Anti-slip silicone pads keep your laptop securely anchored without scratches.",
    shortDescription: "Ergonomic multi-angle aluminum laptop stand with heat dissipation layout.",
    price: 1199,
    originalPrice: 1999,
    discountPercentage: 40,
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80"
    ],
    category: "laptop-accessories",
    stock: 40,
    stockCount: 40,
    rating: 4.4,
    reviewsCount: 63,
    ratingCount: 63,
    featured: false,
    createdAt: "2026-06-28T12:00:00Z",
    specs: {
      "Brand": "Portronics",
      "Material": "Anodized Aluminum Alloy + Silicone Pads",
      "Adjustment": "6 Level Adjustable (5.5cm to 15.5cm)",
      "Compatibility": "Laptops & Tablets from 10 to 15.6 inches",
      "Weight Capacity": "Up to 5 kg"
    },
    warranty: "1 Year Portronics India Warranty",
    deliveryTime: "FREE Delivery by Monday",
    features: [
      "Ergonomic design prevents neck strain and fatigue",
      "Anodized aluminum alloy body for lightweight durability",
      "Ventilated open-air design increases laptop cooling and airflow"
    ],
    reviews: [
      {
        id: "rev-7-1",
        productId: "el-7",
        userId: "usr-701",
        userName: "Manish Joshi",
        rating: 4,
        comment: "Solid build quality. Folds down flat to easily fit in my bag. Perfect for remote work.",
        createdAt: "2026-07-03T11:55:00Z"
      }
    ]
  },
  {
    id: "el-8",
    name: "Belkin 3-Socket Surge Protector Extension Cord",
    slug: "belkin-3-socket-surge",
    sku: "BLK-3SOK-SURGE-USB",
    brand: "Belkin",
    modelNumber: "F9H300v2M",
    description: "Protect your expensive appliances and home office electronics with Belkin's high-grade surge protection. Features 3 heavy-duty AC sockets, a 2-meter power cord, child safety shutters, and an energy rating of 700 Joules to protect against voltage spikes.",
    shortDescription: "Heavy-duty 3 AC sockets surge protector with safety shutters and 2m cable.",
    price: 1099,
    originalPrice: 1699,
    discountPercentage: 35,
    images: [
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80"
    ],
    category: "phone-accessories",
    stock: 55,
    stockCount: 55,
    rating: 4.5,
    reviewsCount: 52,
    ratingCount: 52,
    featured: false,
    createdAt: "2026-07-02T12:00:00Z",
    specs: {
      "Brand": "Belkin",
      "Cable Length": "2 Meters (6.6ft)",
      "Outlets": "3 AC Sockets",
      "Surge Rating": "700 Joules",
      "Max Current": "10 Amps / 2400 Watts",
      "Response Time": "< 1 Nanosecond"
    },
    warranty: "5 Years Connected Equipment Warranty by Belkin",
    deliveryTime: "FREE Delivery by Wednesday",
    features: [
      "700 Joules surge protection rating protects home devices",
      "Child safety shutters prevent accidental electric shocks",
      "Heavy-duty copper cabling ensures stable and safe power transmission"
    ],
    reviews: [
      {
        id: "rev-8-1",
        productId: "el-8",
        userId: "usr-801",
        userName: "Tushar Gupta",
        rating: 5,
        comment: "Excellent surge protector. Feel very safe connecting my PC and monitors to it.",
        createdAt: "2026-07-05T10:10:00Z"
      }
    ]
  }
];
