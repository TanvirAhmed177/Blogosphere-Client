import React, { useContext, useState, useEffect } from "react";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../../App";
import fire from "./firebase.config";
import Nav from "./../../Nav/Nav";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  // Google Sign in method

  const [user, setUser] = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(true);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (result) {
        authListener();

        // ...
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);

            break;

          default:
            break;
        }
      });
  };

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (result) {
        alert(
          "User signed up successfully! Please Log in to continue to the website. Thanks!"
        );
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);

            break;

          default:
            break;
        }
      });
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();

        setUser(user);
        history.replace(from);
        console.log(user);
      } else {
        setUser("");
      }
    });
  };

  return (
    <div>
      <Nav></Nav>
      <section className="login">
        <div className="loginContainer">
          <label htmlFor="">Username</label>
          <input
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p className="errorMsg">{emailError}</p>
          <label htmlFor="">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p className="errorMsg">{passwordError}</p>
          <div className="btnContainer">
            {hasAccount ? (
              <>
                <button className="login-button" onClick={handleLogin}>
                  Log In
                </button>
                <p>
                  Don't have an account?{" "}
                  <span
                    onClick={() => {
                      setHasAccount(!hasAccount);
                    }}
                  >
                    Sign Up
                  </span>
                </p>
              </>
            ) : (
              <>
                <button className="login-button" onClick={handleSignUp}>
                  Sign Up
                </button>
                <p
                  onClick={() => {
                    setHasAccount(!hasAccount);
                  }}
                >
                  Have an account? <span>Log In</span>
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
