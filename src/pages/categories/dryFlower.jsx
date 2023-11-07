import React, { useEffect, useState } from "react";
import useFetchFlowerData from "../../component/fetch";
import useFetchFirestoreData from "../../component/fetchData";
import { collection, getDocs } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase";

function DryFlowers() {
  //check if a user  is signed in to display signin or logoff nav
  const [signed, setSigned] = useState(null);

  // ...
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setSigned(user);
        console.log("User UID: here here " + user.uid); // Log the user's UID
      } else {
        setSigned(null);
        console.log("User UID: log off "); // Log the user's UID
      }
    });
    return () => {
      unsubscribe(); // Unsubscribe when the component unmounts
    };
  }, [signed]);
  // ...

  useEffect(() => {
    console.log("logging in and out");
    getSelected();
  }, [signed]);

  // container to keep flower object from local storage

  // const me = signed ? useFetchFirestoreData("buyDriedFlowers", signed.uid) || []
  // : JSON.parse(localStorage.getItem("buyDriedFlowers")) || [];
  //  const me =  useFetchFirestoreData("buyDriedFlowers", "Jh8F4y9jx0eUohOlvngWngRKxKy1");
  //  console.log(me + "from firestore");

  async function getSelected() {
    if (signed) {
      


      try {
        const querySnapshot = await getDocs(collection(db, "buyDriedFlowers"), signed.uid); //fresheners = dynamic
        const flowerData = [];

        querySnapshot.forEach((doc) => {
          doc.forEach(() => {
            flowerData.push({...doc.data()} );
          });
          
         
          console.log(JSON.stringify(flowerData) + 'here')
        });

        setBuy(flowerData);
        console.log(   {flowerData} +"new fetch working fine")

      
      } catch (error) {
        console.error("new fetch not working fine", error);
      }


    } else {
      const data = JSON.parse(localStorage.getItem("buyDriedFlowers")) || [];
      setBuy(data);
    }
  }

  // fetching displayed items for users to buy
  const storedBuy = localStorage.getItem("buyDriedFlowers") || [];

  const collectionName = "driedFlowers";

  const { data, selectedItem } = useFetchFlowerData(collectionName, storedBuy);

  // Update the state when data changes, data gotten from the useFetchFlowerData hook
  useEffect(() => {
    setFlowers(data);
    setBuy(selectedItem);
  }, [data, selectedItem]);

  // store datas to be displayed
  const [flowers, setFlowers] = useState(data);
  // store selected item
  const [buy, setBuy] = useState(selectedItem);

  useEffect(() => {
    if (selectedItem) {
      setBuy(selectedItem);
    }
  }, [selectedItem]);

  //filter selected item
  useEffect(() => {
    const knowBuy = () => {
      setBuy(flowers.filter((flower) => flower.quantity > 0));
    };
    knowBuy();
  }, [flowers]);

  // Store slected item 'buy' in localStorage whenever it changes
  async function saveDataToFirestore() {
    if (signed && buy.length > 0) {
      const buyData = {};
      buy.forEach((item, index) => {
        buyData[index] = item;
      });

      try {
        await setDoc(doc(db, "buyDriedFlowers", signed.uid), buyData);
        console.log("see it : " + signed.uid);
      } catch (error) {
        console.error("Error setting document in Firestore:", error);
        // Handle the error as needed
      }
    } else {
      localStorage.setItem("buyDriedFlowers", JSON.stringify(buy));
    }
  }

  // Now, use the useEffect to run saveDataToFirestore when 'buy' changes
  useEffect(() => {
    saveDataToFirestore();
  }, [buy]);

  // incremental and decremental function
  const incrementQuantity = (index) => {
    const updatedFlowers = [...flowers];
    updatedFlowers[index].quantity += 1;
    setFlowers(updatedFlowers);
  };

  const decrementQuantity = (index) => {
    const updatedFlowers = [...flowers];
    if (updatedFlowers[index].quantity > 0) {
      updatedFlowers[index].quantity -= 1;
      setFlowers(updatedFlowers);
    }
  };
  return (
    <div className=" w-full grid sm:grid-cols-2  grid-cols-1 ">
      {/* div1 */}
      <div className=" w-full ">
        <img className=" w-full " src="./images/Dried FlowerS.png " alt="" />
      </div>
      {/* div2 */}
      <div className=" w-full bg-Gray grid sm:grid-cols-2 grid-rows-1 grid-cols-1 ">
        {flowers.map((flower, index) => (
          <div
            style={{
              backgroundImage: `url(${flower.flowerImage})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
            }}
            className="md:h-[270px] text-white font-bold  flex flex-col justify-center items-center sm:h-[200px] h-[350px]"
          >
            <h3>{flower.flowerName}</h3>
            <p> ${flower.flowerPrice}</p>

            <div className=" flex items-center justify-center ">
              <span
                onClick={() => incrementQuantity(index)}
                className="p-2  bg-white text-black rounded align-middle mr-2"
              >
                +
              </span>
              <span className="p-2  bg-white text-black rounded align-middle mr-2">
                {flower.quantity}
              </span>
              <span
                onClick={() => decrementQuantity(index)}
                className="p-2  bg-white text-black rounded align-middle"
              >
                -
              </span>
            </div>

            {/* Add other flower details you want to display */}
          </div>
        ))}
      </div>
      {/* div2 */}
    </div>
  );
}

export default DryFlowers;
