import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCQ2gbWUBIAmPlwV1wfkovwIXHITV7Q2HU",
  authDomain: "portfoliosubmissions-dad23.firebaseapp.com",
  projectId: "portfoliosubmissions-dad23",
  storageBucket: "portfoliosubmissions-dad23.firebasestorage.app",
  messagingSenderId: "1076465931002",
  appId: "1:1076465931002:web:6433e61dfd87eaa055ef43"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function submitContactMessage(data: ContactSubmission) {
  try {
    const contactsRef = collection(db, 'contacts');
    const docRef = await addDoc(contactsRef, {
      ...data,
      timestamp: serverTimestamp(),
      source: 'React Portfolio 2026'
    });
    return { success: true, id: docRef.id };
  } catch (error: any) {
    console.error("Firebase contact submission error:", error);
    return { success: false, error: error?.message || "Failed to send message." };
  }
}
