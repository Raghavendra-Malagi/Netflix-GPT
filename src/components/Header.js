import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageOptions = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div className="absolute top-0 left-0 z-10 px-8 py-2 bg-gradient-to-b from-black w-full flex justify-between">
      <img className="w-40 mt-5" src={LOGO} alt="netflix-logo" />
      {user && (
        <div className="flex items-center ">
          {showGptSearch && (
            <select
              className="bg-gray-800 text-white p-2 m-2 focus:outline-none"
              name=""
              id=""
              onChange={handleLanguageOptions}
            >
              {SUPPORTED_LANGUAGES.map((res) => (
                <option key={res.identifier} value={res.identifier}>
                  {res.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearchClick}
            className=" text-white mr-4 hover:underline"
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            className="w-8 h-8 mr-4 text-white"
            src={user?.photoURL}
            alt="userIcon"
          />
          <h1 className="mr-4 text-white">{user?.displayName}</h1>
          <button
            onClick={handleSignOut}
            className="cursor-pointer hover:underline  text-white"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
