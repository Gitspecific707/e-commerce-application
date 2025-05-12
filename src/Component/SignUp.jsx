import React, { useState,useEffect } from 'react'
import {Navigate, useNavigate} from 'react-router-dom';

const SignUp = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [city,setCity]=useState('');
    const [password,setPassword]=useState('');
    const navigate= useNavigate();

    useEffect(()=>{
      const auth=localStorage.getItem('user');
      if(auth)
      {
        Navigate('/')
      }
    },[])

    const handleClick=async()=>
        {
            console.warn(name,email,city,password);
            let result=await fetch('http://localhost:7000/register',{
              method:'POST',
              body:JSON.stringify({name,email,city,password}),
              headers:{'Content-Type':'application/json'},
            })
result=await result.json()
console.warn(result);
localStorage.setItem("user",JSON.stringify(result));
if(result)
{
  navigate('/');
}
        }

  return (
    <>
    <div className='inputbox'>
 <h1>SignUp</h1>
 <input type='text' value={name} className='inputbox' onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'></input>
 <input type='text' value={email} className='inputbox' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email' ></input>
 <input type='text' value={city} className='inputbox' onChange={(e)=>setCity(e.target.value)} placeholder='Enter City'></input>
 <input type='text' value={password} className='inputbox' onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password'></input>
 
 <button onClick={handleClick} className='SignUpbtn'>SignUp</button>

    </div>
    </>
  )
}

export default SignUp
