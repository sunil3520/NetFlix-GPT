import React, { useEffect, useRef, useState } from "react";
import netflixLogo from "../../assets/Netflix-logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../redux/userSlice";
import { FaUserTie } from "react-icons/fa";
import useGetCurrentPath from "../../hooks/useGetCurrentPath";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const userMenuRef = useRef(null);
  const user = useSelector((store) => store.user);
  const currentPath = useGetCurrentPath();

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
        if (currentPath === "/") {
          navigate(-1);
        }
      } else {
        //user is signout
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth).catch((err) => {
      navigate("/error");
    });
  };

  const handleMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const handleOutSideClick = (event) => {
    if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutSideClick);
    // return () =>{
    //   document.removeEventListner("click",handleOutSideClick)
    // }
  }, []);

  return (
    <div className="absolute bg-gradient-to-b from-black top-0 w-full h-20 z-50 flex justify-between ">
      <div className="px-8 py-4">
        <img className="w-[120px] md:[200px]" src={netflixLogo} alt="Logo" />
      </div>
      {user && (
        <div className=" relative" ref={userMenuRef}>
          <button
            onClick={handleMenu}
            type="button"
            className=" absolute right-4 top-4 mb-0 flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <FaUserTie className="text-3xl text-gray-400" />
          </button>

          {showMenu && (
            <div
              className="absolute right-4 top-8  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div class="px-4 py-3">
                <span class="block text-sm text-gray-900 dark:text-white">
                  {user?.displayName}
                </span>
                <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  {user?.email}
                </span>
              </div>
              <ul class="py-2">
                <li
                  onClick={handleLogout}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100
              dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
