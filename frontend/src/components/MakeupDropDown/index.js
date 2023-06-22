import React, { useState, useEffect } from "react";



function MakeupDropDown() {
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


  return (
    <>
      <button onClick={openMenu} style={{ border: "none", outline: "none", boxShadow: "none" }} className="button-box">
      </button>
      <div className="makeup-drop">
        <div className={!showMenu ? "hidden" : null}> 
            <ul>
                <h1 className="user-dropdown"> Makeup
                <hr className="modal-line"></hr>
                    <div>
                        <li>
                            Lips
                        </li>
                        <li>
                            Eyes
                        </li>
                        <li>
                            Cheek
                        </li>
                    </div>
                </h1>
            </ul>
        </div>
      </div>
    </>
  );
}

export default MakeupDropDown;
