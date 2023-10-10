import React, { useEffect, useState } from "react";
import useFetchFlowerData from "../../component/fetch";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

function FreshFlowers() {
  const storedBuy = localStorage.getItem("buyFreshFlower") || [];
  const collectionName = "flowersForSale";

  const { data, selectedItem } = useFetchFlowerData(collectionName, storedBuy);

  useEffect(() => {
    // Update the state when data changes
    setFlowers(data);
    setBuy(selectedItem);
  }, [data, selectedItem]);
  // const [flowers, setFlowers] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const querySnapshot = await getDocs(collection(db, "flowersForSale"));
  //       const flowerData = [];
  //       querySnapshot.forEach((doc) => {
  //         flowerData.push({ id: doc.id, ...doc.data() });
  //       });
  //       setFlowers(flowerData);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   console.log(flowers);
  //   fetchData();
  // }, []); // The empty dependency array ensures that this effect runs once when the component mounts.

  // store selected item
  const [flowers, setFlowers] = useState(data);

  const [buy, setBuy] = useState(selectedItem);

  useEffect(() => {
    const knowBuy = () => {
      setBuy(flowers.filter((flower) => flower.quantity > 0));
    };
    knowBuy();
  }, [flowers]);

  // Store slected item 'buy' in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("buyFreshFlower", JSON.stringify(buy));
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
      <div className=" w-full  ">
        <img src="../../../public/images/Fresh Flowers.png " alt="" />
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
            className="md:h-[230px] text-white font-bold  flex flex-col justify-center items-center sm:h-[200px] h-[350px]"
          >
            <h3>{flower.flowerName}</h3>
            <p> ${flower.flowerPrice}</p>

            <div className=" flex items-center justify-center ">
              <span
                onClick={() => incrementQuantity(index)}
                className="p-2 cursor-pointer  bg-white text-black rounded align-middle mr-2"
              >
                +
              </span>
              <span className="p-2  bg-white text-black rounded align-middle mr-2">
              {flower.quantity}
              </span>
              <span
                onClick={() => decrementQuantity(index)}
                className="p-2 cursor-pointer bg-white text-black rounded align-middle"
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

export default FreshFlowers;
