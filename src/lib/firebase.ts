import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
// Use the firestoreDatabaseId from the config if available, otherwise it defaults
export const db = getFirestore(app, (firebaseConfig as any).firestoreDatabaseId);
export const auth = getAuth(app);

// Connectivity check
async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error: any) {
    if (error.message?.includes('the client is offline')) {
      console.error("Please check your Firebase configuration.");
    }
  }
}
testConnection();

export interface Lead {
  name: string;
  whatsapp: string;
  email: string;
  source: string;
  createdAt: any;
}

export async function saveLead(leadData: Omit<Lead, 'createdAt'>) {
  try {
    const leadsRef = collection(db, 'leads');
    await addDoc(leadsRef, {
      ...leadData,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error saving lead:", error);
    throw error;
  }
}
