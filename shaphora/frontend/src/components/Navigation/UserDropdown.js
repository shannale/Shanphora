import React, { useState, useEffect } from "react";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import './Navigation.css';
import user from "./Images/user.png"



function UserDropDown() {
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
      <button onClick={openMenu} style={{ border: "none", outline: "none", boxShadow: "none" }} className="button-box">
        <img className='user-profile-img' src={user} alt='' />
      </button>
      <div className={!showMenu ? "hidden" : null}> 
        <ul className="profile-dropdown user-dropdown">
            <h1 className="drop-message"> Have a great day, Beautiful 
              <hr className="modal-line"></hr>
                <div className="buttons">
                    <li className="login-button">
                            <LoginFormModal />
                    </li>
                    <li className="sign-up">
                            <SignupFormModal />
                    </li>

                </div>

            </h1>
        </ul>
      </div>
    </>
  );
}

export default UserDropDown;