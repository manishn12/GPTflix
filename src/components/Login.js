import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Netflix background image"
        />
      </div>
      <form className="p-12 bg-black absolute my-36 w-3/12 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-2xl">
          {isSignInForm ? "Sign IN" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800"
          />
        )}
        <input
          type="text"
          name="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <button
          type="submit"
          className="p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer "
        >
          {isSignInForm ? "Sign IN" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
