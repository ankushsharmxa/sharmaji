import { db } from "./config";
import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  query, 
  where 
} from "firebase/firestore";

// Placeholders for database queries
export const getDocument = async (col: string, id: string) => {
  const docRef = doc(db, col, id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};

export const getCollection = async (col: string, queryConstraints: any[] = []) => {
  const colRef = collection(db, col);
  const q = query(colRef, ...queryConstraints);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
