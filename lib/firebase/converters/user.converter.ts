import { FirestoreDataConverter, QueryDocumentSnapshot, DocumentData, WithFieldValue } from "firebase/firestore";
import { UserProfile } from "@/types";

export const userConverter: FirestoreDataConverter<UserProfile> = {
  toFirestore(profile: WithFieldValue<UserProfile>): DocumentData {
    return {
      uid: profile.uid,
      displayName: profile.displayName,
      email: profile.email,
      phone: profile.phone,
      photoURL: profile.photoURL,
      role: profile.role,
      isVerified: profile.isVerified,
      isActive: profile.isActive,
      addresses: profile.addresses || [],
      defaultAddressId: profile.defaultAddressId || "",
      wishlistCount: profile.wishlistCount || 0,
      cartCount: profile.cartCount || 0,
      emailNotifications: profile.emailNotifications ?? true,
      marketingEmails: profile.marketingEmails ?? false,
      theme: profile.theme || "system",
      createdAt: profile.createdAt,
      updatedAt: profile.updatedAt,
      lastLoginAt: profile.lastLoginAt,
    };
  },
  fromFirestore(snapshot: QueryDocumentSnapshot): UserProfile {
    const data = snapshot.data();
    return {
      uid: data.uid || snapshot.id,
      displayName: data.displayName || "",
      email: data.email || "",
      phone: data.phone || "",
      photoURL: data.photoURL || "",
      role: data.role || "customer",
      isVerified: data.isVerified || false,
      isActive: data.isActive ?? true,
      addresses: data.addresses || [],
      defaultAddressId: data.defaultAddressId || "",
      wishlistCount: data.wishlistCount || 0,
      cartCount: data.cartCount || 0,
      emailNotifications: data.emailNotifications ?? true,
      marketingEmails: data.marketingEmails ?? false,
      theme: data.theme || "system",
      createdAt: data.createdAt || null,
      updatedAt: data.updatedAt || null,
      lastLoginAt: data.lastLoginAt || null,
    };
  },
};
