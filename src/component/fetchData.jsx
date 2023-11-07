import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

// const storedBuy = localStorage.getItem("buyFreshener") || [];

function useFetchFirestoreData(collectionName, userId) {
  const [data, setData] = useState([]);
  
  // container to keep flower object from firebase

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, collectionName), userId); //fresheners = dynamic
        const flowerData = [];

        querySnapshot.forEach((doc) => {
          flowerData.push({...doc.data() });
        });

        setData(flowerData);
        console.log(  data +"working fine for real")

      
      } catch (error) {
        console.error("Error fetching selected items from firebase", error);
      }
    };

    fetchData();
  }, []);
  
  if (data) {
    return data;
  } else {
    return [];
  }
}

export default useFetchFirestoreData;


