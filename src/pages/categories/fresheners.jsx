import React, { useEffect, useState } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../config/firebase";
import useFetchFlowerData from "../../component/fetch";

function Fresheners() {
  // container to keep flower object from firebase
  
  const storedBuy = localStorage.getItem("buyFreshener") || [];
  const collectionName = "fresheners";
 
  const { data, selectedItem} = useFetchFlowerData(collectionName, storedBuy);


  useEffect(() => {
    // Update the state when data changes
    setFlowers(data);
    setBuy(selectedItem);
  }, [data, selectedItem]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const querySnapshot = await getDocs(collection(db, "fresheners"));  //fresheners = dynamic
  //       const flowerData = [];

  //       querySnapshot.forEach((doc) => {
  //         let quantity = 0;
  //         if (storedBuy) {
  //           const parsedBuy = JSON.parse(storedBuy);
  //           const matchingItem = parsedBuy.find((item) => item.id === doc.id);
  //           if (matchingItem) {
  //             quantity = matchingItem.quantity;
  //           }
  //         }

  //         flowerData.push({ id: doc.id, ...doc.data(), quantity });
  //       });

  //       setFlowers(flowerData);

  //       // Update the buy state after setting flowers
  //       setBuy(flowerData.filter((flower) => flower.quantity > 0));
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // The empty dependency array ensures that this effect runs once when the component mounts.

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
    
    localStorage.setItem("buyFreshener", JSON.stringify(buy));
   
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
        <img className=" w-full  " src="images/card item (4).png " alt="" />
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
            className="md:h-[270px] text-Gray font-bold  flex flex-col justify-center items-center sm:h-[200px] h-[350px]"
          >
            <h3>{flower.flowerName}</h3>
            <p> ${flower.flowerPrice}</p>

            <div className=" flex items-center justify-center ">
              <span
                onClick={() => incrementQuantity(index)}
                className="p-2 cursor-pointer bg-Gray text-white rounded align-middle mr-2"
              >
                +
              </span>
              <span className="p-2  bg-Gray text-white rounded align-middle mr-2">
                {" "}
                {flower.quantity}
              </span>
              <span
                onClick={() => decrementQuantity(index)}
                className="p-2 cursor-pointer bg-Gray text-white rounded align-middle"
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

export default Fresheners;
