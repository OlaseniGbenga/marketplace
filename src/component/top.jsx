import React from "react";
import { Link } from "react-router-dom";

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
  return (
    <header className=" font-Gilroy ">
      <div className="">
        <div className="md:block hidden">
          <ul className=" text-Black w-full bg-White border  border-solid border-Black sm:grid sm:grid-cols-8   flex flex-col   ">
            <li className="col-start-1 border sm:border-y-0 sm:border-r-0 border-b-0 border-solid border-Black flex items-center sm:justify-center  transform transition-transform hover:rotate-y-180 py-[2rem] px-[1.5rem]">
              <Link to="/">Shop</Link>
            </li>
            <li className="col-start-2 border sm:border-y-0  border-b-0 border-solid border-Black flex items-center sm:justify-center  py-[2rem] px-[1.5rem]">
              <Link to="contact">Contact</Link>
            </li>
            <li className=" col-start-7 border sm:border-x sm:border-y-0  border-b-0  border-solid border-Black flex items-center sm:justify-center  py-[2rem] px-[1.5rem]">
              <Link to="signin">Signin</Link>
            </li>
            <li className="col-start-8 border  sm:border-x-0 sm:border-y-0 border-b-0 border-solid border-Black flex items-center sm:justify-center  py-[2rem] px-[1.5rem]">
              <Link to="cart">Cart</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden  flex justify-between border solid border-Black">
          <span className="p-4 border border-y-0 border-l-0 border-x-1 border-Black">
            <FontAwesomeIcon icon={faBars} />
          </span>
          <span className="p-4 border border-y-0 border-r-0 border-x-1 border-Black ">
            <FontAwesomeIcon icon={faBagShopping} />
          </span>
        </div>{" "}
        {/* <div className=" md:hidden sm:w-1/2"> 
          <span className="p-6  border border-Black block "><FontAwesomeIcon icon={faXmark} /></span>
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
          <div className="p-6  border border-Black border-t-0">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faPinterest} />
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faTelegram} />
          <FontAwesomeIcon icon={faBars} />
        </div>

        </div> */}
      </div>
    </header>
  );
}

export default Top;
