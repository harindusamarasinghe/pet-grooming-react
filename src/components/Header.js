import React from 'react';
import {Link} from 'react-router-dom'
import "../css/style.css"
import logo from "../img/logo/Logo transparent.png"



function Header(){
  const handleActive = (e)=>{
    document.querySelectorAll('.main-menu ul li').forEach( el => {
      el.classList.remove('active');
    })
    e.target.parentNode.classList += ' active';
  }
    const subActive = (e)=>{
    document.querySelectorAll('.main-menu ul li').forEach( el => {
      el.classList.remove('active');
    })
    e.target.parentNode.parentNode.parentNode.classList += ' active';
  }
    return(
<header>
        <div className="header-top-area">
          <div className="container custom-container">
            <div className="row align-items-center">
              <div className="col-md-7">
                <div className="header-top-left">
                  <ul>
                    <li>Call us: (949) 500-1765</li>
                    <li><i className="far fa-clock" />Opening Hours: 9:00 am - 5:00 pm (Mon - Fri) 8:30 am - 4:30 pm (Sat) 10:00 am - 4:00 pm (Sun)</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5">
                <div className="header-top-right">
                  <ul className="header-top-social">
                    <li className="follow">Follow :</li>
                    <li><a href="/#"><i className="fab fa-facebook-f" /></a></li>
                    <li><a href="/#"><i className="fab fa-twitter" /></a></li>
                    <li><a href="/#"><i className="fab fa-instagram" /></a></li>
                    <li><a href="/#"><i className="fab fa-linkedin-in" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="sticky-header" className="menu-area">
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler"><i className="fas fa-bars" /></div>
                <div className="menu-wrap">
                  <nav className="menu-nav show">
                    <div className="logo">
                    <Link to="/"><img src={logo} alt="" style={{height:'100px'}} /></Link>
                    </div>
                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        <li className="active menu-item-has-children"><Link to="/" onClick={(e)=> handleActive(e)}>Home</Link>
                          
                        </li>
                        {/* <li><Link to="/doglist" onClick={(e)=> handleActive(e)}>Dog List</Link></li> */}
                        {/* <li className="menu-item-has-children"><Link to="/shop" onClick={(e)=> handleActive(e)}>Shop</Link>
                          <ul className="submenu">
                            <li><Link to="/shop" onClick={(e)=> subActive(e)}>Our Shop</Link></li>
                            <li><Link to="/shop-details" onClick={(e)=> subActive(e)}>Shop Details</Link></li>
                          </ul>
                        </li> */}
                        
                        <li className="menu-item-has-children"><Link to="/full-details" onClick={(e)=> handleActive(e)}>Our Services</Link>
                          <ul className="submenu">
                            <li><Link to="/full-details" onClick={(e)=> subActive(e)}>Full Service</Link></li>
                            <li><Link to="/bath-details" onClick={(e)=> subActive(e)}>Bath and Brush Packages</Link></li>
                            <li><Link to="/combination-details" onClick={(e)=> subActive(e)}>Combination </Link></li>
                            <li><Link to="/combinationShed-details" onClick={(e)=> subActive(e)}>Combination Shed Control</Link></li>
                            <li><Link to="/individual-details" onClick={(e)=> subActive(e)}>Individual Items</Link></li>
                            <li><Link to="/frenchie-details" onClick={(e)=> subActive(e)}>Frenchie Package</Link></li>
                            <li><Link to="/bulldog-details" onClick={(e)=> subActive(e)}>Bull Dogs</Link></li>
                            <li><Link to="/goldern-details" onClick={(e)=> subActive(e)}>Goldern Retriever / Huskey / German Shepard</Link></li>
                            <li><Link to="/corgi-details" onClick={(e)=> subActive(e)}>Corgi</Link></li>
                          </ul>
                        </li>
                        {/* <li className="menu-item-has-children"><Link to="/blogs" onClick={(e)=> handleActive(e)}>Blog</Link>  
                        </li> */}
                        <li><Link to="/adoption" onClick={(e)=> handleActive(e)}>About Us</Link></li>
                        <li><Link to="/contacts" onClick={(e)=> handleActive(e)}>Contact Us</Link></li>
                      </ul>
                    </div>
                    <div className="header-action d-none d-md-block">
                      <ul>
                        <li className="header-search"><a href="/#"><i className="flaticon-search" /></a></li>
                        {/* <li className="header-shop-cart"><a href="/#"><i className="flaticon-shopping-bag" /><span>2</span></a>
                          <ul className="minicart">
                            <li className="d-flex align-items-start">
                              <div className="cart-img">
                                <a href="/#"><img src="img/product/cart_p01.jpg" alt="" /></a>
                              </div>
                              <div className="cart-content">
                                <h4><a href="/#">The King Charles Spaniel</a></h4>
                                <div className="cart-price">
                                  <span className="new">$229.9</span>
                                  <span><del>$229.9</del></span>
                                </div>
                              </div>
                              <div className="del-icon">
                                <a href="/#"><i className="far fa-trash-alt" /></a>
                              </div>
                            </li>
                            <li className="d-flex align-items-start">
                              <div className="cart-img">
                                <a href="/#"><img src="img/product/cart_p02.jpg" alt="" /></a>
                              </div>
                              <div className="cart-content">
                                <h4><a href="/#">The Labrador Retriever</a></h4>
                                <div className="cart-price">
                                  <span className="new">$229.9</span>
                                  <span><del>$229.9</del></span>
                                </div>
                              </div>
                              <div className="del-icon">
                                <a href="/#"><i className="far fa-trash-alt" /></a>
                              </div>
                            </li>
                            <li>
                              <div className="total-price">
                                <span className="f-left">Total:</span>
                                <span className="f-right">$239.9</span>
                              </div>
                            </li>
                            <li>
                              <div className="checkout-link">
                                <a href="/#">Shopping Cart</a>
                                <a className="black-color" href="/#">Checkout</a>
                              </div>
                            </li>
                          </ul>
                        </li> */}
                    <li className="header-btn">
                    <a href="sms:+19495001765"
                      className="btn" 
                      style={{ textDecoration: 'none', color: 'white' }}>
                      Book Now <img src="img/icon/w_pawprint.png" alt="Paw Print" />
                    </a>
                    </li>
                      </ul>
                    </div>
                  </nav>
                </div>
             
                <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn"><i className="fas fa-times" /></div>
                    <div className="nav-logo"><Link to="/"><img src="img/logo/logo.png" alt="" title='true' /></Link>
                    </div>
                    <div className="menu-outer">
                  
                    </div>
                    <div className="social-links">
                      <ul className="clearfix">
                        <li><a href="/#"><span className="fab fa-twitter" /></a></li>
                        <li><a href="/#"><span className="fab fa-facebook-square" /></a></li>
                        <li><a href="/#"><span className="fab fa-pinterest-p" /></a></li>
                        <li><a href="/#"><span className="fab fa-instagram" /></a></li>
                        <li><a href="/#"><span className="fab fa-youtube" /></a></li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="menu-backdrop" />
         
              </div>
            </div>
          </div>
          <div className="header-shape" style={{backgroundImage:"url('img/bg/header_shape.png')"}}/>
        </div>
       
        <div className="search-popup-wrap" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="search-close">
            <span><i className="fas fa-times" /></span>
          </div>
          <div className="search-wrap text-center">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2 className="title">... Search Here ...</h2>
                  <div className="search-form">
                    <form>
                      <input type="text" name="search" placeholder="Type keywords here" />
                      <button className="search-btn"><i className="fas fa-search" /></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      
      </header>
    )
}

export default Header