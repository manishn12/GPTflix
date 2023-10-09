import { useState } from "react";
import Header from "./Header";
import { Validator } from "../utils/validator";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMAGE, PHOTO_URL } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
    setFormData({
      fullName: "",
      email: "",
      password: "",
    });
  };
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState(null);

  const handleInput = (e) => {
    let { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    let fullName = formData.fullName;
    let email = formData.email;
    let password = formData.password;
    let validateData = Validator(email, password, fullName);
    setErrorMsg(validateData);

    if (validateData) {
      return;
    }
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("Create User", user);
          updateProfile(user, {
            displayName: fullName,
            photoURL: PHOTO_URL,
          })
            .then(() => {
              const { uid, displayName, email, photoURL } = auth.currentUser;
              console.log("From Body", { uid, displayName, email, photoURL });
              dispatch(addUser({ uid, displayName, email, photoURL }));
            })
            .catch((error) => {
              console.error("Error updating profile:", error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          setErrorMsg("Check Credentials one more time.");
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BACKGROUND_IMAGE} alt="Netflix" />
      </div>
      <form onSubmit={handleFormSubmit} className="p-12 bg-black absolute my-36 w-3/12 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-2xl">{isSignInForm ? "Sign IN" : "Sign Up"}</h1>
        {!isSignInForm && (
          <input type="text" name="fullName" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-800" value={formData.fullName} onChange={handleInput} onFocus={() => setErrorMsg(null)} />
        )}
        <input type="text" name="email" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-800" value={formData.email} onChange={handleInput} onFocus={() => setErrorMsg(null)} />
        <input type="password" name="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-800" onChange={handleInput} value={formData.password} onFocus={() => setErrorMsg(null)} />
        <button type="submit" className="p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer ">
          {isSignInForm ? "Sign IN" : "Sign Up"}
        </button>
        {errorMsg && <p className="text-red-600">{errorMsg}</p>}
        <p className="py-4 cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
