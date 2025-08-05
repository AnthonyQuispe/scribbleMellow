import "./GoogleButton.scss";
import GoogleIcon from "../../assets/Icons/GoogleIcon.svg";

import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/FirebaseConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function GoogleButton() {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleGoogleButton = () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;
        const userRef = doc(db, "users", user.uid);
        const userData = {
          email: user.email,
          name: user.displayName || "",
          username: user.email.split("@")[0],
        };

        try {
          await setDoc(userRef, userData, { merge: true });
        } catch (firestoreError) {
          console.error("Error writing user to Firestore:", firestoreError);
          // Optional: you can alert the user here
          alert("Trouble loggign in with Google");
        }

        // ✅ Redirect regardless of Firestore success
        navigate("/", {
          state: {
            userEmail: user.email,
          },
        });
      })
      .catch((error) => {
        console.error("Google sign-in failed:", error);
        alert("Google sign-in failed. Please try again.");
      });
  };

  return (
    <button
      className="google-button"
      onClick={handleGoogleButton}
      type="button"
    >
      <img alt="google Icon" src={GoogleIcon} className="google__img" />
      <p className="google__description">Sign in with Google</p>
    </button>
  );
}
