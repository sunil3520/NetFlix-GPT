import React, { useEffect } from "react";
import netflixLogo from "../../assets/Netflix-logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user= useSelector((store)=>store.user)
  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        //user is signout
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
    .catch((err)=>{
      navigate("/error")
    })
  };

  return (
    <div className="absolute bg-gradient-to-b from-black top-0 w-screen h-20 z-50  p-3 flex justify-between">
      <div>
        <img className="h-full" src={netflixLogo} alt="Logo" />
      </div>
      {
        user &&
        <div className="flex gap-2">
        <img
          className="h-full rounded-full"
          src={user.photoURL}
          alt="profile"
        />
        <button
          onClick={handleLogout}
          className="bg-black rounded-md text-white px-5"
        >
          LOGOUT
        </button>
      </div>
      }
    </div>
  );
};

export default Header;
