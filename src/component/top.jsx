import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
//firebase
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../config/firebase';

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBagShopping,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faPinterest,
  faFacebookF,
  faXTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

function Top() {

  //check if a user  is signed in to display signin or logoff nav
  const [signed, setSigned] = useState(null);
  
  useEffect(()=>{
    const unsubscribe = async () => {
      try{
        onAuthStateChanged(auth, (user) => {
          if (user) {
           setSigned(user)
          
          } else {
            setSigned(null)
          }
        });
      }
      catch{

      }
    }
    unsubscribe()
  },[signed]);
  
  //toggle visibility of nav
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isMavVisible, setMavVisibility] = useState(true);
  

  const toggleNavVisibility = () => {
    setNavVisibility(!isNavVisible);
    setMavVisibility(!isMavVisible);
  };

  return (
    <header className=" font-Gilroy ">
      <div className="">
        {/* nav for lg screen */}
        <div className="md:block hidden">
          <ul className=" text-Black w-full bg-White border  border-solid border-Black sm:grid sm:grid-cols-8   flex flex-col   ">
            <li className="col-start-1 border sm:border-y-0 sm:border-r-0 border-b-0 border-solid border-Black flex items-center sm:justify-center  transform transition-transform hover:rotate-y-180 py-[2rem] px-[1.5rem]">
              <Link to="/">Shop</Link>
            </li>
            <li className="col-start-2 border sm:border-y-0  border-b-0 border-solid border-Black flex items-center sm:justify-center  py-[2rem] px-[1.5rem]">
              <Link to="contact">Contact</Link>
            </li>
            <li className=" col-start-7 border sm:border-x sm:border-y-0  border-b-0  border-solid border-Black flex items-center sm:justify-center  py-[2rem] px-[1.5rem]">
            {signed ? (
             <Link to="logoff">Logoff</Link>
        ) : (
       

          <Link to="signin">Signin</Link>
        )}
              
              
             
            </li>
            <li className="col-start-8 border  sm:border-x-0 sm:border-y-0 border-b-0 border-solid border-Black flex items-center sm:justify-center  py-[2rem] px-[1.5rem]">
              <Link to="cart">Cart</Link>
            </li>
          </ul>
        </div>

        {/* nav for small screen */}
       { isMavVisible && (<div className="md:hidden  flex justify-between border solid border-Black ">
          <span onClick={toggleNavVisibility} className="p-4 border border-y-0 border-l-0 border-x-1 border-Black">
            <FontAwesomeIcon icon={faBars} />
          </span>
          <span className="p-4 border border-y-0 border-r-0 border-x-1 border-Black ">
            <FontAwesomeIcon icon={faBagShopping} />
          </span>
        </div>)}

        {/* toggled menue */}

        {isNavVisible && (
          <div className=" md:hidden sm:w-1/2 z-10 relative">
            <span onClick={toggleNavVisibility} className="p-6  border border-Black block ">
              <FontAwesomeIcon icon={faXmark} />
            </span>
            <p className="p-6  border border-Black border-t-0">sign in</p>
            <p className="p-6  border border-Black border-t-0">Shop</p>
            <p className="p-6  border border-Black border-t-0">Service</p>
            <p className="p-6  border border-Black border-t-0">Contact</p>
            <p className="p-6  border border-Black border-t-0">About Us</p>
            <div className="p-6  border border-Black border-t-0">
              <p>Shipping & returns</p>
              <p>Terms & Conditions</p>
              <p>Private policy</p>
            </div>
            <div className="p-6  flex justify-between border border-Black border-t-0">
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faPinterest} />
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faXTwitter} />
              <FontAwesomeIcon icon={faTelegram} />
              
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Top;
