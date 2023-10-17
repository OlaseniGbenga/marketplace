import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase';

function Signu() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // You may want to add a success message or redirect the user after successful sign-up.
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className='p-4 flex flex-col md:items-center my-20'>
      <div className='w-full md:w-[30rem] flex flex-col gap-y-4 '>
        <p className='font-bold text-2xl'>Sign-up</p>
        <form className='flex flex-col gap-y-4' onSubmit={signIn}>
          <input onChange={(e) => setEmail(e.target.value)} className='pb-1 border-solid border-black border-x-0 border-2 border-t-0 focus:outline-none' type="email" placeholder='Email' />
          <input onChange={(e) => setPassword(e.target.value)} className='pb-1 border-solid border-black border-x-0 border-2 border-t-0 focus:outline-none' type="password" placeholder='Password' />
          <button type="submit" className='text-white bg-black py-4 px-6 font-bold'>Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default Signu;
