import { storage } from "./config";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";

// Placeholder for uploading a file to Firebase storage
export const uploadFile = async (path: string, file: File): Promise<string> => {
  const storageRef = ref(storage, path);
  const snapshot = await uploadBytes(storageRef, file);
  return getDownloadURL(snapshot.ref);
};
