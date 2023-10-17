import React, { useState, useEffect } from "react";

function Cart() {
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

  return <div>Cart</div>;
}

export default Cart;
