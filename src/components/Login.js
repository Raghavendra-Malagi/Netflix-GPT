import { useRef, useState } from "react";
import Browse from "./Browse";
import Header from "./Header";
import { checkValidaData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const handleFormValidation = () => {
    const message = checkValidaData(
      isSignInForm ? null : name.current.value,
      email.current.value,
      password.current.value
    );
    // console.log(message);
    setErrorMessage(message);
    if (message) return;
    //do sign in and sign up
    if (!isSignInForm) {
      //Sign Up login
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://avatars.githubusercontent.com/u/45160479?s=96&v=4",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });

          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const handleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage("");
  };
  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg"
          alt="logo"
        />
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          action=""
          className="text-white w-4/12 mx-auto bg-black  bg-opacity-70 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-10"
        >
          <h1 className="text-2xl my-2">
            {isSignInForm ? "Sign In" : "Sign Up "}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="my-2 p-2 w-full bg-gray-600 rounded-lg"
            />
          )}
          <input
            type="text"
            ref={email}
            placeholder="Email or Phone Number"
            className="my-2 p-2 w-full bg-gray-600 rounded-lg"
          />

          <input
            type="text"
            ref={password}
            placeholder="Password"
            className="my-2 p-2 w-full bg-gray-600 rounded-lg"
          />
          <p className="text-red-700">{errorMessage}</p>
          <button
            onClick={handleFormValidation}
            className="w-full bg-red-700 p-2 my-2 rounded-lg"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="hover:underline my-4 cursor-pointer"
            onClick={handleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up Now "
              : "Already Registered? Sing In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
