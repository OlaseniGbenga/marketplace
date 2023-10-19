import React, { useState, useEffect } from "react";
import Signin from "./signin";

//firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

function Cart() {
  //check if a user  is signed in to display signin or logoff nav
  const [signed, setSigned] = useState(null);

  useEffect(() => {
    const unsubscribe = async () => {
      try {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setSigned(user);
          } else {
            setSigned(null);
          }
        });
      } catch {}
    };
    unsubscribe();
  }, [signed]);

  const [data, setData] = useState([]); // Initialize data as an empty array

  // // Function to retrieve data from local storage for a specific key

  useEffect(() => {
    // Function to retrieve data from local storage for a specific key
    const retrieveDataFromLocalStorage = (key) => {
      const storedData = localStorage.getItem(key);
      return storedData ? JSON.parse(storedData) : [];
    };

    // Retrieve data for each key and update the state
    const newData = [
      ...retrieveDataFromLocalStorage("buyAromaCandles"),
      ...retrieveDataFromLocalStorage("buyDriedFlowers"),
      ...retrieveDataFromLocalStorage("buyFreshener"),
      ...retrieveDataFromLocalStorage("buyFreshFlower"),
      ...retrieveDataFromLocalStorage("buyLivePlant"),
    ];

    setData(newData);

    console.log(data);
  }, [data]);

  return (
    <div className="px-4">
      {signed ? (
        data.map((item) => {
          return (
            <div className="grid  grid-rows-1 grid-cols-5 lg:w-[40rem] md:w-[30rem] w-full m-[auto] border-solid border-black border-2 mt-6  ">
              <div className=" col-span-2 ">
                <img src={item.flowerImage} alt="" />
              </div>
              <div className="col-span-3  flex flex-col justify-around p-4">
                <div className="flex flex-row justify-between items-center">
<p className="text-xl">{item.flowerName}</p> <p className="bg-Gray p-2 rounded">${item.flowerPrice}</p> <p>x</p>
                </div>
                <div className="flex flex-row"><p>-</p><p>{item.quantity}</p> <p>+</p> </div>
                <div className="font-bold">${item.quantity * item.flowerPrice}</div>
              </div>
            </div>
          );
        })
      ) : (
        <>
          <Signin></Signin>
        </>
      )}
    </div>
  );
}

export default Cart;
