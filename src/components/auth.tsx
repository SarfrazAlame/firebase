import { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup,signOut } from "firebase/auth";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(auth?.currentUser?.email);

  const Signin = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const signinWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
        console.error(error)
    }
  };

  const logout = async() =>{
    try {
        await signOut(auth)
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <>
      <div>
        <input
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button onClick={Signin}> Sign in</button>
        <button onClick={signinWithGoogle}>Sign In With Google</button>

        <button onClick={logout}>Logout</button>
      </div>
    </>
  );
};
