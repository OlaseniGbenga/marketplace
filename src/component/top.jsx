import React from "react";


function Top() {
  return (
    <header className=" bg-StatusSuccess font-Gilroy">
      <div>
        <div>
          <ul className=" text-Black  bg-White border  borde-solid border-Black grid grid-cols-8  md:  ">
            <li className="col-start-1 border border-y-0 border-r-0 border-solid border-Black flex items-center justify-center  transform transition-transform hover:rotate-y-180 py-[2rem] px-[1.5rem]">
            <p className="hover:animate-moveup"> Shop</p>
            </li>
            <li className="col-start-2 border border-y-0 border-solid border-Black flex items-center justify-center  py-[2rem] px-[1.5rem]">
            <p className="hover:animate-moveup"> Contact</p>
            </li>
            <li className=" col-start-7 border border-y-0 border-r-0 border-solid border-Black flex items-center justify-center  py-[2rem] px-[1.5rem]">
            <p className="hover:animate-moveup"> Signin</p>
            </li>
            <li className="col-start-8 border border-y-0 border-solid border-Black flex items-center justify-center  py-[2rem] px-[1.5rem]">
            <p className="hover:animate-moveup"> Cart</p>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
      <div></div>
    </header>
  );
}

export default Top;
