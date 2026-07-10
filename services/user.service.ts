import { db } from "@/lib/firebase/config";
import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { userConverter } from "@/lib/firebase/converters/user.converter";
import { UserProfile } from "@/types";

export const userService = {
  /**
   * Create a new user profile document in Firestore
   */
  async createUser(uid: string, email: string, displayName: string): Promise<UserProfile> {
    const userRef = doc(db, "users", uid).withConverter(userConverter);
    
    const newProfile: UserProfile = {
      uid,
      displayName: displayName || "",
      email,
      phone: "",
      photoURL: "",
      role: "customer",
      isVerified: false,
      isActive: true,
      addresses: [],
      defaultAddressId: "",
      wishlistCount: 0,
      cartCount: 0,
      emailNotifications: true,
      marketingEmails: false,
      theme: "system",
      createdAt: null, // set by serverTimestamp on write
      updatedAt: null,
      lastLoginAt: null,
    };

    // Use setDoc with converter. For write, we cast as standard object but let converter handle mapping.
    // We use serverTimestamp() for write.
    const writeData = {
      ...newProfile,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      lastLoginAt: serverTimestamp(),
    } as any;

    await setDoc(userRef, writeData);
    
    // Fetch and return the newly created profile
    const createdProfile = await this.getUser(uid);
    if (!createdProfile) {
      throw new Error("Failed to retrieve created user profile.");
    }
    return createdProfile;
  },

  /**
   * Fetch a user profile document from Firestore
   */
  async getUser(uid: string): Promise<UserProfile | null> {
    const userRef = doc(db, "users", uid).withConverter(userConverter);
    const snap = await getDoc(userRef);
    return snap.exists() ? snap.data() : null;
  },

  /**
   * Update fields on a user profile in Firestore
   */
  async updateUser(uid: string, data: Partial<UserProfile>): Promise<void> {
    const userRef = doc(db, "users", uid).withConverter(userConverter);
    
    const updateData = {
      ...data,
      updatedAt: serverTimestamp(),
    };

    await updateDoc(userRef, updateData);
  },

  /**
   * Update the last login timestamp in Firestore
   */
  async updateLastLogin(uid: string): Promise<void> {
    const userRef = doc(db, "users", uid).withConverter(userConverter);
    await updateDoc(userRef, {
      lastLoginAt: serverTimestamp(),
    });
  }
};
