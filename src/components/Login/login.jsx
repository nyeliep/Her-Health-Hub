import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./signUp.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="container">
      <div className="signup">
        <div className="signup-classic">
          <h2 style={{ fontWeight: "600", fontSize: "25px" }}>Login</h2>

          <div className="form">
            <fieldset className="email">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                style={{ color: "#000" }}
                placeholder="Enter Email"
              />
            </fieldset>
            <fieldset className="password">
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
              />
            </fieldset>

            <button className="btn" onClick={handleEmailLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

