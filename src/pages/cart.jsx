import React, { useState,useEffect } from 'react'

function Cart() {
 

  const [plant, setPlant] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch('https://trefle.io/api/v1/plants?token=droQkF9Gg5gWtNK_NF8Eq0VLASGwXcjp8uajgc1LQTM');

      if (!response.ok) {
        throw new Error('Network response was not ok');
        
      }

      const data = await response.json();

      setPlant(data);

      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      console.log('error occured');
    }
  }

  useEffect(() => {
    // Call fetchData when the component mounts
    fetchData();
  }, []);


  return (
    <div>Cart</div>
  )
}

export default Cart