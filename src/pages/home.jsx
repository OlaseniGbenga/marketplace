import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div class="">
      {/* 1 */}
      <div className="grid xl:grid-cols-2 ">
        {/* container */}
        <div className="sm:p-20 p-4  border border-Black b0rder-solid border-r-0">
          <div>
            <span>
              <p className="text-[37px] sm:text-[67px] font-semibold leading-[80.4px]">
                Kyiv
              </p>
              <p className="text-[37px] sm:text-[67px] font-semibold sm:leading-[80.4px] leading-[50px]">
                LuxeBouquets
              </p>
              <span className="text-[37px] font-semibold relative top-[-72px] left-[220px] sm:left-[420px]">
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
        {/* container */}
        <div className=" grid grid-cols-2   ">
          <div className="border border-solid border-black border-r-0 border-t-0 p-6 flex flex-col justify-between items-center">
            <div></div>
            <p className="font-semibold text-[20px] sm:text-[38px]">
              Fresh Flowers
            </p>
            <span className="flex items-center">
              <p className="pr-4 font-semibold text-[12px] sm:text-base">
                Shop now
              </p>{" "}
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </div>
          <div className="">
            <img src="/images/card item.png " className="h-full w-full"></img>
          </div>
          <div className="">
            <img
              src="/images/card item (2).png "
              className="h-full w-full"
            ></img>
          </div>
          <div className="border border-solid border-black border-r-0 border-t-0 p-6 flex flex-col justify-between items-center">
            <div></div>
            <p className="font-semibold text-[20px] sm:text-[38px]">
              Dried Flowers
            </p>
            <span className="flex items-center">
              <FontAwesomeIcon icon={faArrowLeft} />{" "}
              <p className="pl-4 font-semibold text-[12px] sm:text-base ">
                Shop now
              </p>
            </span>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="grid md:grid-cols-2 grid-cols-1 ">
        <div className="  hidden md:block border border-solid border-Black border-t-0 border-r-0"></div>
        <div className=" grid   w-full">
          {/* container */}
          <div className=" grid  grid-cols-2  ">
            <div className="border border-solid border-black border-r-0 border-t-0 p-6 flex flex-col justify-between items-center">
              <div></div>
              <p className="font-semibold text-[20px] sm:text-[38px]">
                Live Flowers
              </p>
              <span className="flex items-center">
                <p className="pr-4 font-semibold text-[12px] sm:text-base">
                  Shop now
                </p>{" "}
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
            <div className="">
              <img
                src="/images/card item (1).png "
                className="h-full w-full"
              ></img>
            </div>
          </div>
          {/* container */}
          <div className="grid-cols-2  grid">
            <div className="">
              <img
                src="/images/card item (3).png "
                className="h-full w-full"
              ></img>
            </div>
            <div className="border border-solid border-black border-r-0 border-t-0 p-6 flex flex-col justify-between items-center">
              <div></div>
              <p className="font-semibold text-[20px] sm:text-[38px]">
                Aroma Candels
              </p>
              <span className="flex items-center">
                <FontAwesomeIcon icon={faArrowLeft} />
                <p className="pl-4 font-semibold text-[12px] sm:text-base">
                  Shop now
                </p>
              </span>
            </div>
          </div>
          {/* container */}
          <div className=" grid grid-cols-2 ">
            <div className="border border-solid border-black border-r-0 border-t-0 p-6 flex flex-col justify-between items-center">
              <div></div>
              <p className="font-semibold text-[20px] sm:text-[38px]">
                Fresheners
              </p>
              <span className="flex items-center">
                <p className="pr-4 font-semibold text-[12px] sm:text-base">
                  Shop now
                </p>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
            <div className="">
              <img
                src="/images/card item (4).png "
                className="h-full w-full"
              ></img>
            </div>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="grid md:grid-cols-2  grid-cols-1">
        <div className=" p-4 sm:p-20 border border-solid border-Black border-t-0">
          <p className="font-semibold text-[20px] sm:text-[38px]">About us</p>
        </div>
        <div className="p-4 sm:p-20 w-full flex flex-col">
          <p>OUR STORY</p>
          <p className="mt-10 font-semibold text-[20px] sm:text-[38px]">
            Kyiv LuxeBouquets
          </p>
          <p className="mt-10">
            We are a modern local floral studio, which specializes in the design
            and delivery of unique bouquets. We have the best florists who
            carefully select each look, our studio cooperates directly with
            farms for growing different flowers, so we always have fresh
            flowers, which are collected by our florists in exquisite bouquets.
            We have a collection of fresh bouquets, collections of dried
            bouquets, house plants, as well as fragrant candles from luxury
            brands to create the perfect atmosphere. Make someone's day amazing
            by sending flowers, plants and gifts the same or next day. Ordering
            flowers online has never been easier.
          </p>
          <div className="mt-16 py-4 px-6 border border-solid border-black sm:w-fit flex justify-around">
            Learn more
          </div>
        </div>
      </div>
      {/* 4 */}
      <div className="grid md:grid-cols-2  grid-cols-1">
        <div className=" p-4 sm:p-20 border border-solid border-Black md:border-t-0 border-t-1 ">
          <p className="font-semibold text-[20px] sm:text-[38px]">
            Why choose us?
          </p>
        </div>
        <div className="  flex flex-col">
          <div className="flex flex-col p-4 sm:p-20 border border-l-0 border-solid border-Black md:border-t border-t-0">
            <p className="  font-semibold text-[20px] sm:text-[38px]">
              Stylish bouquets by florists
            </p>

            <p className=" pt-4">
              At our floral studio, our professional florists craft the most
              elegant and stylish bouquets using only the freshest and highest
              quality materials available. We stay up-to-date with the latest
              floral design trends and offer unique arrangements that are sure
              to impress. Let us brighten up your day with our stunning bouquets
              and same-day delivery service.
            </p>
          </div>

          <div className="flex flex-col p-4 sm:p-20 border border-l-0 border-solid border-Black border-t-0">
            <p className="  font-semibold text-[20px] sm:text-[38px]">
              Stylish bouquets by florists
            </p>

            <p className=" pt-4">
              At our floral studio, our professional florists craft the most
              elegant and stylish bouquets using only the freshest and highest
              quality materials available. We stay up-to-date with the latest
              floral design trends and offer unique arrangements that are sure
              to impress. Let us brighten up your day with our stunning bouquets
              and same-day delivery service.
            </p>
          </div>

          <div className="flex flex-col p-4 sm:p-20 border border-l-0 border-solid border-Black border-t-0">
            <p className="  font-semibold text-[20px] sm:text-[38px]">
              Stylish bouquets by florists
            </p>

            <p className=" pt-4">
              At our floral studio, our professional florists craft the most
              elegant and stylish bouquets using only the freshest and highest
              quality materials available. We stay up-to-date with the latest
              floral design trends and offer unique arrangements that are sure
              to impress. Let us brighten up your day with our stunning bouquets
              and same-day delivery service.
            </p>
          </div>
        </div>
      </div>

      {/* 5*/}
      <div className="grid md:grid-cols-2  grid-cols-1">
        <div className="bg-red-600 h-10 w-full"></div>
        <div className="bg-blue-600 h-10 w-full"></div>
      </div>
    </div>
  );
}

export default Home;
