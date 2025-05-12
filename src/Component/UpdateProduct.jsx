import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
    const [name,setName]=useState('');
    const[price,setPrice]=useState('');
    const[category,setCategory]=useState('');
    const[company,setCompany]=useState('');
    const params=useParams();
    const navigate=useNavigate();
    

useEffect(()=>
{
    getProductDetail();
},[])

const getProductDetail=async()=>
{
let result=await fetch(`http://localhost:7000/product/${params.id}`);
result=await(await result).json();
console.log(result);
setName(result.name);
setPrice(result.price);
setCategory(result.category);
setCompany(result.company);
}

    const handleUpdateProduct=async()=>
        {
            
            
            let result= await fetch(`http://localhost:7000/product/${params.id}`,
                {
                    method:'put',
                    body:JSON.stringify({name,price,category,company}),
                    headers:{'Content-Type':'application/json'}
                }
            );
            result=await result.json();
            console.warn(result);
            navigate('/');
            
        }



  return (
    <div className='inputbox'>
    <h2>Update Product Details..</h2>
      <input type='text' className='inputbox' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter product name'></input>
      <input type='text' className='inputbox' value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Enter product price'></input>
      <input type='text' className='inputbox' value={category} onChange={(e)=>setCategory(e.target.value)} placeholder='Enter product Category'></input>
      <input type='text' className='inputbox'  value={company} placeholder='Enter product company' onChange={(e)=>setCompany(e.target.value)}></input>
      <button onClick={handleUpdateProduct} className="SignUpbtn">update Product</button>
      </div>
  )
}

export default UpdateProduct
