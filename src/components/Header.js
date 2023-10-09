import { onAuthStateChanged, signOut } from "firebase/auth";
import ProfileIcon from "../assets/user.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGE } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/GPTSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showGPTSearch = useSelector((state) => state.gpt.showGPTSearch);
  const user = useSelector((state) => state.user);
  const data = useSelector((state) => state.user);
  console.log("data", data);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        console.log("From Body", { uid, displayName, email, photoURL });
        dispatch(addUser({ uid, displayName, email, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleGPTSearch = () => {
    dispatch(toggleGPTSearchView());
  };

  const handleLanguageChange = (e) => {
    const value = e.target.value;
    dispatch(changeLanguage(value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between z-50">
      <img className="w-44" src={NETFLIX_LOGO} alt="netflix's logo" />
      {user && (
        <div className="flex p-2 ">
          {showGPTSearch && (
            <select className="p-2 bg-gray-900 text-white px-4 m-2 focus:outline-none" onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGE.map((lang) => (
                <option key={lang.id} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button className="px-4 py-2 mx-4 my-2 rounded-lg bg-red-600 text-white cursor-pointer" onClick={handleGPTSearch}>
            {showGPTSearch ? "Home Page" : "GPT Search"}
          </button>
          <img className="w-12 h-12" alt="profile-icon" src={user.photoURL ? user.photoURL : ProfileIcon} />
          <button className="text-white font-bold" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
