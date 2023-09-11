
import {auth} from '../config/firebase'
import{createUserWithEmailAndPassword} from 'firebase/auth'
import React, { useState } from 'react';



function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
        

    const signIn = async () => {

      try {
        await createUserWithEmailAndPassword(auth,email,password);

      } catch (error) {
        alert(error.message)
    } }
    
  return (
    <div className=''>
        <input onChange={(e) =>setEmail(e.target.value)} type="email" placeholder='Email' />
        
        <input onChange={(e) =>setPassword(e.target.value)}  type="password" placeholder='Password' />
        <button onClick={signIn}>sign in</button>
    </div>
  )
}

export default Auth;