import React, { useState } from "react";
import "./signUp.css";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name,
        });
        console.log(userCredential.user);
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="signup">
        <div className="signup-classic" style={{ color: "#000" }}>
          <h2 style={{ fontWeight: "600", fontSize: "25px" }}>Create Your Account</h2>

          <div className="form">
            <fieldset className="username">
              <input type="text" onChange={(e) => setName(e.target.value)} style={{ color: "#000" }} placeholder="Enter Name" />
            </fieldset>
            <fieldset className="email">
              <input type="email" onChange={(e) => setEmail(e.target.value)} style={{ color: "#000" }} placeholder="Enter Email" />
            </fieldset>
            <fieldset className="password">
              <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
            </fieldset>

            <button className="btn" onClick={handleEmailSignUp}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
