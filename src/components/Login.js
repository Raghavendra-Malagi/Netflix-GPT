import { useState } from "react";
import Browse from "./Browse";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const handleSignInForm = () => {
    setIsSignIn(!isSignIn);
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
          action=""
          className="text-white w-4/12 mx-auto bg-black  bg-opacity-70 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-10"
        >
          <h1 className="text-2xl my-2">{isSignIn ? "Sign In" : "Sign Up"}</h1>
          {isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="my-2 p-2 w-full bg-gray-600 rounded-lg"
            />
          )}
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="my-2 p-2 w-full bg-gray-600 rounded-lg"
          />

          <input
            type="text"
            placeholder="Password"
            className="my-2 p-2 w-full bg-gray-600 rounded-lg"
          />

          <button className="w-full bg-red-700 p-2 my-2 rounded-lg">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="hover:underline my-4 cursor-pointer"
            onClick={handleSignInForm}
          >
            {isSignIn
              ? "New to Netflix? Sign Up Now"
              : "Already Registered? Sing In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
