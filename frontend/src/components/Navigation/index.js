import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import SearchBar from '../SearchBar';
import './Navigation.css';
import { BsSuitHeart } from 'react-icons/bs';
import { BsBasket3 } from 'react-icons/bs';
// import { BsPersonHearts } from 'react-icons/bs';
import UserDropDown from './UserDropdown';
// import ShoppingCart from '../ItemCount';
// import CartItems from '../CartItemsIndex';
import { useHistory } from 'react-router-dom';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  const history = useHistory();

  const scrollToLipsSection = () => {
    const lipsSection = document.getElementById('lips-section');
    lipsSection.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToEyesSection = () => {
    const eyesSection = document.getElementById('eyes-section');
    eyesSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCheekSection = () => {
    const cheekSection = document.getElementById('cheek-section');
    cheekSection.scrollIntoView({ behavior: 'smooth' });
  };


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
                <div className='home-link-title'>
                    <NavLink className="home-title" exact={true} to="/">
                      <br />
                      S H A P H O R A
                    </NavLink>


                </div>
                    <div className="home-links-container">
                      {/* {sessionLinks} */}
                          <div className="search-bar">
                            <SearchBar />
                          </div>

                          

                          <div className="heart-icon">
                
                          </div>

                          {/* <div className="heart-icon">
                             <BsPersonHearts />
                          </div>

                          <div className="community">
                             Community
                          </div> */}

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

                          <div className="cart-icon">
                            <div className='shopping-cart-button'>  
                                    <BsBasket3 onClick={() => (history.push('/cartItems')) }/> 
                            </div>
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
                <a className="category-names" href="/products/" > Makeup </a>
              </li>
              <li>
                <a className="category-names" onClick={scrollToEyesSection}> Eyes </a>
              </li>
              <li>
                <a className="category-names" onClick={scrollToLipsSection}> Lips </a>
              </li>
              <li>
                <a className="category-names" onClick={scrollToCheekSection}> Cheek </a>
              </li>
  
          </ul>
      </div>

    </>
  );
}

export default Navigation;






