import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signInSuccess } from "../redux/user/userSlice.js";
import { app } from "../firebase.js";

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const url = import.meta.env.VITE_BACKEND_URL;

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      /* "app" is from firebase.js */
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);

      const res = await fetch(url + "/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      /* converting it to JSON format from stringify */
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      console.log("Couldn't sign in with Google", error);
    }
  };

  return (
    /* changing the type="submit" which is default to type="button" will prevent auto submit  */
    <button
      onClick={handleGoogleClick}
      type="button"
      className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
    >
      continue with google
    </button>
  );
};

export default OAuth;
