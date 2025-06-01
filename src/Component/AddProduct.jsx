import React, { useState } from 'react'

const AddProduct = () => {
    const [name,setName]=useState('');
    const[price,setPrice]=useState('');
    const[category,setCategory]=useState('');
    const[company,setCompany]=useState('');
    const[error,setError]=useState(false);



    const handleProduct=async()=>
        {
            console.warn(name,price,category,company);
            if(!name || !category || !company || !price)
            {
                setError(true);
                return false; // iska matlab ab aage nahi chalega ye function
            }
            let userId=JSON.parse(localStorage.getItem('user'))._id;
            console.log(userId);
            let result=await fetch('http://localhost:7000/add-product',{
              method:'POST',
              body:JSON.stringify({name,price,category,company,userId}),
              headers:{'Content-Type':'application/json'},
            })
result=await result.json()
console.warn(result);
// localStorage.setItem("user",JSON.stringify(result));
if(result)
{
 alert("Product successfully added!");
}
setName('');
setCategory('');
setCompany('');
setPrice('');
        }



  return (
    <div className='inputbox'>
    <h2>Add Product Details..</h2>
      <input type='text' className='inputbox' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter product name'></input>
     {error && !name && <span>Enter valid Name!!</span>} 
      <input type='text' className='inputbox' value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Enter product price'></input>
     {error && !price && <span>Enter valid Price!!</span> } 
      <input type='text' className='inputbox' value={category} onChange={(e)=>setCategory(e.target.value)} placeholder='Enter product Category'></input>
      {error && !category && <span>Enter valid category!!</span>}
      <input type='text' className='inputbox'  value={company} placeholder='Enter product company' onChange={(e)=>setCompany(e.target.value)}></input>
      {error && !company && <span>Enter valid company!!</span> }
      <button onClick={handleProduct} className="SignUpbtn">Add Product</button>
      </div>
  )
}

export default AddProduct
