import { Timestamp } from "firebase/firestore";

export interface UserAddress {
  id: string;
  label: string; // e.g. Home, Office
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  phone: string;
}

export interface UserProfile {
  uid: string;
  displayName: string;
  email: string;
  phone: string;
  photoURL: string;
  role: "customer" | "admin";
  isVerified: boolean;
  isActive: boolean;
  addresses: UserAddress[];
  defaultAddressId: string;
  wishlistCount: number;
  cartCount: number;
  emailNotifications: boolean;
  marketingEmails: boolean;
  theme: "light" | "dark" | "system";
  createdAt: Timestamp | null;
  updatedAt: Timestamp | null;
  lastLoginAt: Timestamp | null;
}
