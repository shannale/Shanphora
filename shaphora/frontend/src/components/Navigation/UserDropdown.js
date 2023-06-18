import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { logout } from "../../store/session";

function UserDropDown() {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
    
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
    
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
    
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogin = (e) => {
    dispatch(logout());
  };

  const handleSignup = () => {
    dispatch(logout());
  };

  return (
    <>
      <button onClick={openMenu}>
        <i className="fa-solid fa-user-circle" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>
            <button onClick={handleLogin}>Login</button>
          </li>
          <li>
            <button onClick={handleSignup}>Sign Up</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default UserDropDown;