import { auth } from "./config";
import { 
  signOut as firebaseSignOut,
  User as FirebaseUser
} from "firebase/auth";

// Placeholders for auth services to be implemented later
export const getCurrentUser = (): FirebaseUser | null => {
  return auth.currentUser;
};

export const logoutUser = async (): Promise<void> => {
  await firebaseSignOut(auth);
};
