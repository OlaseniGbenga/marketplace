import React from 'react';
import { useNavigate } from 'react-router-dom';

import { signOut } from "firebase/auth";
import { auth } from '../config/firebase';

function LogOff() {
    const navigate = useNavigate();

  const unsubscribe = async () => {
    try {
      signOut(auth);
      alert("You have logged off.");
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
    
  }

  return (
    <div className='flex flex-col justify-center items-center my-28'>
      <div onClick={unsubscribe} className='w-full md:w-[30rem] text-white bg-black py-4 px-6 font-bold flex flex-col items-center'>Logoff</div>
    </div>
  )
}

export default LogOff;
