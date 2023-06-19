import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
// import * as sessionActions from '../../store/session';
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import './Navigation.css';


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
        console.log("UserDropdown: closeMenu()")
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
    
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);


  return (
    <>
      <button onClick={openMenu}>
        <i className="fa-solid fa-user-circle" />
      </button>
      <div className={!showMenu ? "hidden" : null}> 
        <ul className="profile-dropdown">
          <li className="login-button">
                <LoginFormModal />
          </li>
          <li className="signup-button">
                <SignupFormModal />
          </li>
        </ul>
      </div>
    </>
  );
}

export default UserDropDown;