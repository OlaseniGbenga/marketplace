import React from "react";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faPinterest,
  faFacebookF,
  faXTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import { faBars } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2   h-9 ">
      {/* div # */}
      <div className="border border-y-1 border-r-1 border-solid border-Black flex flex-col justify-between p-4 sm:p-10  ">
        <p>
          Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines
          Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or
          sharing your address
        </p>

        <input
          className=" mt-12 w-full p-4 border-gray-400 border outline-0"
          type="text"
          placeholder="Your Email"
        />
        <button className=" mt-6 w-full p-4 bg-black text-white ">
          Remind
        </button>
      </div>
      {/* div # */}
      <div className="border border-l-0 border-y-1 border-r-1 border-solid border-Black flex flex-col justify-between p-4 sm:p-10">
        <h1 className="text-Gray font-medium text-2xl">Contact Us</h1>
        <div className="mt-6">
          <p className="text-Gray">Address</p>
          <h1 className="font-medium">15/4 Khreshchatyk Street, Kyiv </h1>
        </div>
        <div className="mt-6">
          <p className="text-Gray"> Phone</p>
          <h1 className="font-medium">+380980099777</h1>
        </div>
        <div className="mt-6">
          <p className="text-Gray">General Enquiry:</p>
          <h1 className="font-medium truncate md:truncate-none ">Kiev.Florist.Studio@gmail.com</h1>
        </div>
        <h1 className="text-Gray mt-6 font-medium text-2xl">Follow Us</h1>
        <div className="mt-6 flex flex-row justify-between text-2xl">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faPinterest} />
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faTelegram} />
          
        </div>
      </div>
      {/* div # */}
      <div className="border border-l-0 border-y-1 border-r-1 border-solid border-Black flex flex-col flex flex-col justify-between p-4 sm:p-10">
        <h1 className="text-Gray font-medium text-2xl">Shop</h1>
        <div className="font-medium mt-6">
          <p>All Products</p>
          <p>Fresh Flowers</p>
          <p>Dried Flowers</p>
          <p>Live Plants</p>
          <p>Designer Vases</p>
          <p>Aroma Candles</p>
          <p>Freshener Diffuser</p>
        </div>
        <h1 className="text-Gray mt-6 font-medium text-2xl">Service</h1>
        <div className="font-medium mt-6">
          <p>Flower Subcription</p>
          <p>Wedding & Event Decor</p>
        </div>
      </div>
      {/* div # */}
      <div className="border border-l-0 border-y-1 border-r-1 border-solid border-Black flex flex-col flex flex-col p-4 sm:p-10">
        <h1 className="text-Gray font-medium text-2xl">About Us</h1>
        <div className="mt-6">
          <p>Our Story</p>
          <p>Blog</p>
        </div>
        <div className="mt-6">
          <p>Shipping & Return</p>
          <p>Terms & Conditions</p>
          <p>Private Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
