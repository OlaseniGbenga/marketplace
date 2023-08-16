import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div class="">
      <div className="grid xl:grid-cols-2 ">
        <div className="p-20 ">
          <div>
            <span>
              <p className="text-[67px] font-semibold leading-[80.4px]">
                Kyiv 
              </p>
              <p className="text-[67px] font-semibold leading-[80.4px]">
                LuxeBouquets
              </p>
              <span className="text-[40px] font-semibold absolute top-[250px] left-[500px]">
                ®
              </span>
            </span>
            <p className="mb-12">
              Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
              Spread Joy with Our Online Flower Delivery Service
            </p>
          </div>
          <div className="xl:flex grid grid-cols-2 border border-solid border-Black border-b-0 border-l-0 border-r-0 pt-6">
            <img
              src="/images/img hero.png "
              className="pr-6 w-full border border-solid border-black border-b-0 border-l-0 border-t-0"
            ></img>
            <p className="self-end pl-6 ">
              Experience the joy of giving with our modern floral studio. Order
              online and send fresh flowers, plants and gifts today.
            </p>
          </div>
        </div>
        <div className=" grid grid-cols-2 grid-rows-2">
          <div className="border border-solid border-black border-r-0 border-t-0 p-6 flex flex-col justify-between items-center">
            <div></div>
            <p className="font-semibold text-[38px]">Fresh Flowers</p>
            <span className="flex items-center">
              <p className="pr-4 font-semibold">Shop now</p> <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </div>
          <div className="">
           
            <img src="/images/card item.png " className="h-full w-full"></img>
          </div>
          <div className="">
           
            <img src="/images/card item (2).png " className="h-full w-full"></img>
          </div>
          <div className="border border-solid border-black border-r-0 border-t-0 p-6 flex flex-col justify-between items-center">
            <div></div>
            <p className="font-semibold text-[38px]">Dried Flowers</p>
            <span className="flex items-center">
            <FontAwesomeIcon icon={faArrowLeft} />  <p className="pl-4 font-semibold">Shop now</p> 
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
