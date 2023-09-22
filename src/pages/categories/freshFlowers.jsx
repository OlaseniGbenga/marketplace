import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

function FreshFlowers() {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "flowersForSale"));
        const flowerData = [];
        querySnapshot.forEach((doc) => {
          flowerData.push({ id: doc.id, ...doc.data() });
        });
        setFlowers(flowerData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    console.log(flowers);
    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts.

  return (
    <div className=" w-full grid sm:grid-cols-2  grid-cols-1 ">
      {/* div1 */}
      <div className=" w-full  ">
        <img src="../../../public/images/Fresh Flowers.png " alt="" />
      </div>
      {/* div2 */}
      <div className=" w-full bg-Gray grid sm:grid-cols-2 grid-rows-1 grid-cols-1 ">
     
          {flowers.map((flower) => (
            <div style={{
              backgroundImage: `url(${flower.flowerImage})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              
              
              
             
            
            }} className= "md:h-[230px] text-white font-bold  flex flex-col justify-center items-center sm:h-[200px] h-[350px]">
            
              <h3 >{flower.flowerName}</h3>
              <p> ${flower.flowerPrice}</p>

              {/* Add other flower details you want to display */}
            </div>
          ))}
       
      </div>
      {/* div2 */}


    </div>
  );
}

export default FreshFlowers;
