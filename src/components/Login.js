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
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG_URl, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleFormValidation = () => {
    const message = checkValidaData(
      isSignInForm ? null : name.current.value,
      email.current.value,
      password.current.value
    );
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
            photoURL: USER_AVATAR,
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
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });

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
          const user = userCredential.user; // ...
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
        <img src={BG_IMG_URl} alt="logo" />
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
