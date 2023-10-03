import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faPhone,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

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
            <Link to="freshflowers"> <span className="flex items-center">
              <p className="pr-4 font-semibold text-[12px] sm:text-base">
                Shop now
              </p>{" "}
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
            </Link>
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
            <Link to="driedflowers"> <span className="flex items-center">
              <p className="pr-4 font-semibold text-[12px] sm:text-base">
                Shop now
              </p>{" "}
              <FontAwesomeIcon icon={faArrowLeft} />
            </span>
            </Link>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="grid md:grid-cols-2 grid-cols-1 ">
        <div className="  hidden md:block border border-solid border-Black border-t-0 border-r-0"></div>
        <div className=" grid   w-fur mll">
          {/* container */}
          <div className=" grid  grid-cols-2  ">
            <div className="border border-solid border-black border-r-0 border-t-0 p-6 flex flex-col justify-between items-center">
              <div></div>
              <p className="font-semibold text-[20px] sm:text-[38px]">
                Live Flowers
              </p>
              <Link to="liveplants"> <span className="flex items-center">
              <p className="pr-4 font-semibold text-[12px] sm:text-base">
                Shop now
              </p>{" "}
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
            </Link>
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
              <Link to="aromacandles"> <span className="flex items-center">
              <p className="pr-4 font-semibold text-[12px] sm:text-base">
                Shop now
              </p>{" "}
              <FontAwesomeIcon icon={faArrowLeft} />
            </span>
            </Link>
            </div>
          </div>
          {/* container */}
          <div className=" grid grid-cols-2 ">
            <div className="border border-solid border-black border-r-0 border-t-0 p-6 flex flex-col justify-between items-center">
              <div></div>
              <p className="font-semibold text-[20px] sm:text-[38px]">
                Fresheners
              </p>
              <Link to="fresheners"> <span className="flex items-center">
              <p className="pr-4 font-semibold text-[12px] sm:text-base">
                Shop now
              </p>{" "}
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
            </Link>
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
              On-time delivery
            </p>

            <p className=" pt-4">
              Never miss a moment with our on-time flower delivery service. Our
              couriers will deliver your bouquet personally, without boxes, to
              ensure it arrives in perfect condition. Trust us to deliver your
              thoughtful gift reliably.
            </p>
          </div>

          <div className="flex flex-col p-4 sm:p-20 border border-l-0 border-solid border-Black border-t-0">
            <p className="  font-semibold text-[20px] sm:text-[38px]">
              Safe payment
            </p>

            <p className=" pt-4">
              You can feel secure when placing an order with us, as we use
              industry-standard security measures to protect your payment
              information. Your transaction will be safe and hassle-free, so you
              can shop with confidence.
            </p>
          </div>

          <div className="flex flex-col p-4 sm:p-20 border border-l-0 border-solid border-Black border-t-0">
            <p className="  font-semibold text-[20px] sm:text-[38px]">
              Subscription by your needs
            </p>

            <p className=" pt-4 ">
              With our subscription service tailored to your specific needs, you
              can enjoy the convenience of having beautiful bouquets delivered
              straight to your door at regular intervals. Our flexible service
              is perfect for busy individuals or those who want to ensure they
              always have fresh flowers on hand. You'll save time and money with
              this hassle-free solution to your floral needs.
            </p>
          </div>
        </div>
      </div>
      {/* grid md:grid-cols-2  md:grid-rows-1 grid-cols-1 grid-rows-2 */}
      {/* 5*/}
      <div className="flex md:flex-row flex-col-reverse">
        {/* a */}
        <div className=" w-full flex flex-col   ">
          <div className=" w-full border border-b sm:p-20 p-4 ">
            <p className="font-semibold text-[20px] sm:text-[38px]">
              To Contact Us
            </p>
            <p className="mt-6">We will call you back</p>
            <form className="mt-4 grid grid-cols-2 gap-4" action="">
              <input
                className="p-4  border border-solid border-Gray"
                type="text"
                placeholder="+380 XX XXX XX XX"
              />
              <button className=" py-4 px-6 bg-Black text-White">
                BOOK A CALL
              </button>
            </form>
          </div>
          <div className=" h-full w-full border grid sm:grid-rows-1 sm:grid-cols-2  grid-rows-2 grid-cols-1">
            <div className=" flex flex-col  items-center  border border-solid border-Black">
              <p className="font-semibold w-full text-center border border-solid border-Black border-t-0 border-x-0 text-[20px] sm:text-[38px]">
                Phone
              </p>
              <div className="py-7 flex flex-col justify-center h-full">
                <span className="flex ">
                  <FontAwesomeIcon icon={faPhone} />{" "}
                  <p className="ml-2">+380980099777</p>
                </span>
                <span className="flex mt-6 ">
                  <FontAwesomeIcon icon={faPhone} />{" "}
                  <p className="ml-2">+380980099111</p>
                </span>
              </div>
            </div>

            <div className=" flex flex-col  items-center  border border-solid border-Black border-l-0  ">
              <p className="font-semibold w-full text-center border border-solid border-Black text-[20px] sm:text-[38px]  border-x-0 border-t-0">
                Adrsess
              </p>
              <div className="py-7 flex flex-col justify-center h-full p-4">
                <p>opening hours: 8 to 11 p.m.</p>

                <p className="mt-6">15/4 Khreshchatyk Street, Kyiv </p>
              </div>
            </div>
          </div>
        </div>
        {/* b */}
        <div className="  w-full   ">
          <img
            src="/images/Right colum.png "
            className="md:h-[720px] h-[330px] w-full"
          ></img>
          <div></div>
        </div>
      </div>

      {/* 6 */}
      <div>
        <p className="font-semibold text-[20px] sm:text-[38px] flex justify-center py-20">
          Our Service
        </p>
      </div>

      {/* 7*/}
      <div className="grid md:grid-cols-2  grid-cols-1">
        <div className=" w-full">
          <img
            src="/images/image 1.png "
            className="md:h-[600px] h-[330px] w-full"
          ></img>
        </div>

        <div className="bg-white  w-full flex flex-col justify-center items-center sm:p-20 px-4 py-20 h-full border border-solid border-Black">
          <p> SERVICES</p>
          <p className="font-semibold text-[20px] sm:text-[38px]">
            Flower Subcriptions
          </p>
          <p className="text-center">
            Experience the convenience and savings of regular flower deliveries
            with our flexible subscription service - up to 30% more profitable
            than one-time purchases.
          </p>
          <div className="mt-12 p-6 border border-solid border-Black">
            Subscribe Now
          </div>
        </div>
      </div>

      <div className="w-full h-full bg-hero-pattern flex justify-center items-center flex-col sm:p-20 px-4 py-20  text-White">
     
        
        <p>Services</p>
        <p className="font-semibold text-[20px] sm:text-[38px]">Wedding & Event Decor</p>
        <p className="text-center">Let our team of expert florists and designers create stunning, on-trend floral décor for your special day. Trust us to bring your vision to life.</p>
       
        <div className="mt-12 p-6 border border-solid border-White">
        Inquire Now
        </div>
      
      </div>
      {/* 9 */}
      <div className="flex items-center justify-center md:p-20 py-20">
      <FontAwesomeIcon className="md:block  hidden" icon={faAngleLeft} />
    
        <div className="flex justify-center items-center flex-col px-10">
        
          <div><img src="/images/google logo.png"></img>
          <p>Reviews</p></div>
          <p className="font-semibold text-[20px] sm:text-[38px]">Our Clients Say</p>
          <p>“Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!”</p>
          <p>– Ronald Richards</p>
          <div className="mt-12 p-6 border border-solid border-Black">
            Read Review
          </div>
        </div>

        <FontAwesomeIcon className="md:block  hidden" icon={faAngleRight} />
      </div>
    </div>
  );
}

export default Home;
