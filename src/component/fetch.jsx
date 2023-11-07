import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

// const storedBuy = localStorage.getItem("buyFreshener") || [];

function useFetchFlowerData(collectionName, localData) {
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState([]);
  // container to keep flower object from firebase

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, collectionName));  //fresheners = dynamic
        const flowerData = [];

        querySnapshot.forEach((doc) => {
          let quantity = 0;
          if (localData) {
            const parsedBuy = JSON.parse(localData);
            const matchingItem = parsedBuy.find((item) => item.id === doc.id);
            if (matchingItem) {
              quantity = matchingItem.quantity;
            }
          }

          flowerData.push({ id: doc.id, ...doc.data(), quantity });
        });

        setData(flowerData);

        console.log ("from fetch.jsx " + flowerData.forEach((flower) => {return flower}))

        // Update the buy state after setting flowers
        setSelectedItem(flowerData.filter((flower) => flower.quantity > 0));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return {
    data,
    selectedItem,
  };
}

export default useFetchFlowerData;