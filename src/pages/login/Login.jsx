import React, { useRef, useState } from "react";
import { formValidate } from "../../utils/formValidate";
import { USER_AVATAR ,COVER_IMAGE } from "../../utils/constant";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const check = useRef(null);
  console.log(check,"check")

  const handleLoginAndSignup = () => {
    const message = formValidate(email.current.value, password.current.value);
    

    if(!check.current.checked){
      setErrorMessage("Please check the box");
      return;
    }
    

    if (!isSignInForm) {
      if (message) {
        setErrorMessage(message);
        return;
      }
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
            photoURL:USER_AVATAR,
          })
            .then((res) => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            navigate("/browse")

            })
            .catch((err) => {
              console.log("some bug occure while profile updating");
            });
        })
        .catch((error) => {
    
          setErrorMessage(error?.code?.split("/")[1]);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user, "user");
          navigate("/browse")

        })
        .catch((error) => {
          setErrorMessage(error?.code?.split("/")[1]);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  return (
    <div>
      <div className="flex  w-screen h-screen justify-center  relative text-white">
        <img
        className="w-screen"
          src={COVER_IMAGE}
          alt="background"
        />
        {/* login form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-50 flex flex-col p-12 w-[90%] bg-black bg-opacity-80 rounded-md sm:w-[50%] md:w-[40%] lg:w-[25%]"
        >
          <h1 className="text-3xl mb-7">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-3 w-full mb-3 bg-gray-700"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className="p-3 w-full mb-3 bg-gray-700"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 w-full mb-7 bg-gray-700"
          />

          <button
            className="bg-red-600 w-full p-3 "
            onClick={handleLoginAndSignup}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-red-600">{errorMessage}</p>
          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center gap-1">
              <input ref={check} id="h1" required type="checkbox" className="mt-1" />
              <label htmlFor="h1">Remember me</label>
            </div>
            <p>Need help?</p>
          </div>
          <p className="mt-10 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "Are you new to Netflix? Signup Now"
              : "Already Registerd? SignIn Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
