import { sendPasswordResetEmail as fbSendPasswordResetEmail } from "firebase/auth";
import { auth } from "./FirebaseConfig";

export async function requestPasswordReset(email) {
  if (!email) throw new Error("Email is required");
  await fbSendPasswordResetEmail(auth, email);
}
