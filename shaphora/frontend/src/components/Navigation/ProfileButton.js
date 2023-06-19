import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import profile from "./Images/user.png"

function ProfileButton({ user }) {
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

    const logout = (e) => {
      e.preventDefault();
      dispatch(sessionActions.logout());
    };

    return (
      <>
        <button onClick={openMenu} style={{ border: "none", outline: "none", boxShadow: "none" }} className="button-box">
        <img className='user-profile-img' src={profile} alt='' />
        </button>

        <div className={!showMenu ? "hidden" : null}> 
            <div className="profile-dropdown logout-dropdown">
                {showMenu && (
                  <ul className="profile-dropdown">
                    <li className="user-message"> Have a good day, {user.firstName}💋 </li>
                        <hr className="modal-line"></hr>
                    <li>
                      <button onClick={logout} className="logout-button">Sign Out</button>
                    </li>
                  </ul>
                )}
            </div>
        </div>
      </>
    );
}

export default ProfileButton;
