import React, { useEffect, useState } from "react";
import useFetchFlowerData from "../../component/fetch";


function DryFlowers() {
  // container to keep flower object from local storage
  const storedBuy = localStorage.getItem("buyDriedFlowers") || [];
  const collectionName = "driedFlowers";
 
  const { data, selectedItem} = useFetchFlowerData(collectionName, storedBuy);
 
  //  // Update the state when data changes, data gotten from the useFetchFlowerData hook
  //  useEffect(() => {
  //   setFlowers(data);
  //   setBuy(selectedItem);
  // }, [data, selectedItem]);

 

  // store datas to be displayed
  const [flowers, setFlowers] = useState(data);
  // store selected item
  const [buy, setBuy] = useState(selectedItem);

  //filter selected item
  useEffect(() => {
    const knowBuy = () => {
      setBuy(flowers.filter((flower) => flower.quantity > 0));
    };
    knowBuy();
  }, [flowers]);

  // Store slected item 'buy' in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("buyDriedFlowers", JSON.stringify(buy));
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
        <img className=" w-full  " src="/images/Dried Flowers.png " alt="" />
      </div>
      {/* div2 */}
      <div className=" w-full bg-Gray grid sm:grid-cols-2 grid-rows-1 grid-cols-1 ">
     
          {flowers.map((flower,index) => (
            <div style={{
              backgroundImage: `url(${flower.flowerImage})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              
              
              
              
            
            }} className= "md:h-[270px] text-white font-bold  flex flex-col justify-center items-center sm:h-[200px] h-[350px]">
            
              <h3 >{flower.flowerName}</h3>
              <p> ${flower.flowerPrice}</p>

              <div className=" flex items-center justify-center ">
                <span 
                 onClick={() => incrementQuantity(index)}
                className="p-2  bg-white text-black rounded align-middle mr-2">+</span>
                <span className="p-2  bg-white text-black rounded align-middle mr-2">{flower.quantity}</span>
                <span onClick={() => decrementQuantity(index)}
                className="p-2  bg-white text-black rounded align-middle">-</span>
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