import { auth } from "@/lib/firebase/config";
import { 
  setPersistence, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
  sendEmailVerification, 
  sendPasswordResetEmail, 
  signOut,
  updateProfile as firebaseUpdateProfile,
  browserLocalPersistence, 
  browserSessionPersistence,
  User as FirebaseUser
} from "firebase/auth";
import { userService } from "./user.service";

export const authService = {
  /**
   * Register a new user using Email & Password
   */
  async signUp(email: string, password: string, displayName: string): Promise<FirebaseUser> {
    // Standard local persistence for signup
    await setPersistence(auth, browserLocalPersistence);
    
    const credential = await createUserWithEmailAndPassword(auth, email, password);
    const user = credential.user;

    // Set the display name in Firebase Auth profile
    await firebaseUpdateProfile(user, { displayName });

    // Create the user document in Firestore users collection
    await userService.createUser(user.uid, email, displayName);

    // Send initial email verification link
    await sendEmailVerification(user);

    return user;
  },

  /**
   * Log in a user using Email & Password
   */
  async login(email: string, password: string, rememberMe: boolean): Promise<FirebaseUser> {
    const persistenceMode = rememberMe ? browserLocalPersistence : browserSessionPersistence;
    await setPersistence(auth, persistenceMode);

    const credential = await signInWithEmailAndPassword(auth, email, password);
    const user = credential.user;

    // Update lastLoginAt timestamp in Firestore profile
    await userService.updateLastLogin(user.uid);

    return user;
  },

  /**
   * Log in or Sign up a user using Google Authentication
   */
  async googleLogin(rememberMe: boolean): Promise<FirebaseUser> {
    const persistenceMode = rememberMe ? browserLocalPersistence : browserSessionPersistence;
    await setPersistence(auth, persistenceMode);

    const provider = new GoogleAuthProvider();
    const credential = await signInWithPopup(auth, provider);
    const user = credential.user;

    // Check if the user document already exists in Firestore
    const existingProfile = await userService.getUser(user.uid);
    if (!existingProfile) {
      // Create user document for Google user
      await userService.createUser(
        user.uid, 
        user.email || "", 
        user.displayName || "Google User"
      );
      // If user photo exists, update in Firestore
      if (user.photoURL) {
        await userService.updateUser(user.uid, { photoURL: user.photoURL });
      }
    } else {
      // Update lastLoginAt for returning Google user
      await userService.updateLastLogin(user.uid);
    }

    return user;
  },

  /**
   * Log out the current user session
   */
  async logout(): Promise<void> {
    await signOut(auth);
  },

  /**
   * Send a password reset email
   */
  async forgotPassword(email: string): Promise<void> {
    await sendPasswordResetEmail(auth, email);
  },

  /**
   * Resend verification email to the currently logged-in user
   */
  async resendVerification(): Promise<void> {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      throw new Error("No authenticated user session found to verify.");
    }
    await sendEmailVerification(currentUser);
  }
};
