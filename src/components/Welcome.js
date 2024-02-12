import React from "react";
import signinButton from "../img/signinbutton.png";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <main className="welcome">
      <h2>Welcome to React Chat.</h2>
      <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
      <p>Guys Sign in with Google to Chat.</p>
      <p>Let's Go.</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={signinButton}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
};
export default Welcome;
