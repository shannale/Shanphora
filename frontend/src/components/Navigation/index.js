import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import SearchBar from '../SearchBar';
import './Navigation.css';
import { BsSuitHeart } from 'react-icons/bs';
import { BsBasket3 } from 'react-icons/bs';
import { BsPersonHearts } from 'react-icons/bs';
import UserDropDown from './UserDropdown';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = <UserDropDown />
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
                      {/* {sessionLinks} */}
                          <div className="search-bar">
                            <SearchBar />
                          </div>

                          

                          <div className="heart-icon">
                
                          </div>

                          <div className="heart-icon">
                             <BsPersonHearts />
                          </div>

                          <div className="community">
                             Community
                          </div>

                          <div className="vl"></div>

                          <div className="signin">
                              {sessionLinks}
                          </div>

                          <div className="profile-message-container">
                              <div className='profile-signin-message'>
                                  Be Logged In
                                  <br></br>
                                  <div className="free-shipping-signin">
                                      to SHOP Shapora
                                  </div>
                              </div>

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
          <ul className="categories">
              <li>
                <a className="category-names"> </a>
              </li>
              <li>
                <a className="category-names"> New </a>
              </li>
              <li>
                <a className="category-names"> Brands </a>
              </li>
              <li>
                <a className="category-names"> Makeup </a>
              </li>
              <li>
                <a className="category-names"> Skincare </a>
              </li>
              <li>
                <a className="category-names"> Hair </a>
              </li>
              <li>
                <a className="category-names"> Fragrance </a>
              </li>
              <li>
                <a className="category-names"> Tools&nbsp;&&nbsp;Brushes </a>
              </li>
              <li>
                <a className="category-names"> Bath&nbsp;&&nbsp;Body</a>
              </li>
              <li>
                <a className="category-names"> Mini&nbsp;Size</a>
              </li>
              <li>
                <a className="category-names"> Gifts </a>
              </li>
              <li>
                <a className="category-names"> Beauty&nbsp;Under&nbsp;$20 </a>
              </li>
              <li>
                <a className="category-names"> Sales&nbsp;&&nbsp;Offers </a>
              </li>
              <li>
                <a className="category-names"> Clean&nbsp;Beauty </a>
              </li>
          </ul>
      </div>

    </>
  );
}

export default Navigation;






