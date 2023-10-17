import React,  { useState }  from "react";
import {auth} from '../config/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";



function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth,email,password);
      alert("successfully signed up")
      window.location.reload();

    } catch (error) {
      alert(error.message)
  } }
  
  return (
    <div className='p-4 flex flex-col md:items-center my-20'>
    <div className='w-full md:w-[30rem] flex flex-col   gap-y-4 '>
    <p className='font-bold text-2xl'>Sign-up</p>
    <form  onSubmit={signIn} className='flex flex-col gap-y-4'>
    <input onChange={(e) =>setEmail(e.target.value)} className='pb-1 border-solid border-black border-x-0 border-2 border-t-0  focus:outline-none' type="email" placeholder='Email' />
     
     <input onChange={(e) =>setPassword(e.target.value)} className=' pb-1 border-solid border-black border-x-0 border-2 border-t-0  focus:outline-none'   type="password" placeholder='Password' />
     <button className='text-white bg-black py-4 px-6 font-bold' >Sign up</button>
  
   
    </form>
 </div>
    </div>
  );
}

export default Signup;
