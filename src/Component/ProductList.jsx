import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ProductList = () => {
  const [product, setProduct] = useState([]);

  console.log("all product list here", product);

  useEffect(() => {
    productList();
  }, []);

  const handleDelete = async (id) => {
    // console.log(id);
    let result = await fetch(`http://localhost:7000/product/${id}`, {
      method: "delete",
    });
    result = result.json();
    if (result) {
      productList();
    }
  };

  const handleSearch=async(e)=>
  {
let key=e.target.value;
if(key.length>0)
{
  let result=await fetch(`http://localhost:7000/search/${key}`)
  result=await result.json();
  setProduct(result);
}
else{
  productList();
}

  }

  const productList = async () => {
    let result = await fetch("http://localhost:7000/products");
    result = await result.json();
    setProduct(result);
  };
  
  return (
    <>
      <div className="product-list">
        <h3>Product List</h3>
        <input type="text" onChange={handleSearch} className="search-box"  placeholder="Search Product by Name or Category or Price"/>
        <ul>
          <li>S.No</li>
          <li>Name</li>
          <li>Price</li>
          <li>Category</li>
          <li>Operation</li>
        </ul>
        {
          product.length>0?
          product.map((item, ind) => {
          return (
            <ul key={ind}>
              <li>{ind + 1}</li>
              <li>{item.name}</li>
              <li>{item.price}</li>
              <li>{item.category}</li>
              <li>
                <button
                  className="operation_button"
                  onClick={(e) => handleDelete(item._id)}>
                  Delete
                </button>
                <Link to={'/update/'+item._id}>Update</Link>
              </li>
            </ul>
          ); 
        }):
        <h2>No Data found!</h2>}
      </div>
    </>
  );
};

export default ProductList;
