import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-4 h-9">
      <div className="flex flex-col justify-between p-10  ">
        <p>
          Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines
          Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or
          sharing your address
        </p>

<input className=" mt-12 w-full p-4 border-gray-400 out outline-gray-400" type="text"  placeholder="Your Email"/>    
<button className="mt-6 w-full p-4 bg-black text-white ">Remind</button>    
      </div>
      <div className="bg-green-600"></div>
      <div className="bg-yellow-600"></div>
      <div className="bg-blue-600"></div>
    </div>
  );
}

export default Footer;
