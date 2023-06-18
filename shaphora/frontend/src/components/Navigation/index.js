import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import SearchBar from '../SearchBar';
import './Navigation.css';
import { BsSuitHeart } from 'react-icons/bs';
import { BsBasket3 } from 'react-icons/bs';
import { BsPersonHearts } from 'react-icons/bs';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  }

  return (
    <>
      <div className="nav-bar">
        <nav>
            <div className="nav-box"> 
              <div className="top-line">
                    <span className="top-line-text">
                      Get FREE shipping on all orders when you join Beauty Insider. Exclusions/terms apply.† &nbsp;
                      <strong className="bold-words">LEARN MORE</strong>
                    </span>
              </div>

              <div className="home-link">
                    <NavLink className="home-title" exact={true} to="/">
                      S H A P H O R A
                    </NavLink>
                    <div className="home-links-container">
                      {sessionLinks}
                          <div className="search-bar">
                            <SearchBar />
                          </div>

                          <div className="heart-icon">
                             <BsPersonHearts />
                          </div>

                          <div className="signin">
                            <LoginFormModal />
                            <SignupFormModal />
                          </div>

                          <div className="heart-icon">
                            <BsSuitHeart />
                          </div>

                          <div className="heart-icon">
                            <BsBasket3 />
                          </div>
                    </div>

            </div>
          </div>
        </nav>
      </div>

      <div className="category-bar">
      </div>
    </>
  );
}

export default Navigation;






