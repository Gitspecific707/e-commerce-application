const express = require("express");
require("./db/config");
const cors = require("cors");

// const mongoose=require('mongoose');

const User = require("./db/User");
const app = express();
app.use(express.json());
const Product = require("./db/Product");
app.use(cors());

//making a route
//registration api
app.post("/register", async (req, resp) => {
  // resp.send("i am connected");
  let user = new User(req.body);
  let result = await user.save();
  result= result.toObject();
  delete result.password
  resp.send(result);
});


//api for fetch product data
app.get('/products',async(req,resp)=>{
let products=await  Product.find(); 
if(products.length>0)
{
  resp.send(products);
}
else{
  resp.send({result:"no product found"});
}
})


//api for add product
app.post('/add-product', async(req,resp)=>
{
let product=new Product(req.body);
let result=await product.save();
resp.send(result);
})


//api for delete product
app.delete('/product/:id',async(req,resp)=>{
  const result=await Product.deleteOne({_id:req.params.id});
resp.send(result);

})

//api for update product
app.put('/product/:id',async(req,resp)=>{
  //updateOne function two parameter leta h ek kis ke basis pe update karna h dusra kya update karna h
  const result=await Product.updateOne(
    {_id:req.params.id},
    {$set:req.body}
    
  )
  resp.send(result);

})

//Api for search $or is use for search in multiple field like name, company etc
app.get('/search/:key',async(req,resp)=>
{
let result=await Product.find(
  {"$or":[
    {name:{$regex:req.params.key}},
    {category:{$regex:req.params.key}},
    {company:{$regex:req.params.key}},
    {price:{$regex:req.params.key}}

  ] 
});
resp.send(result)
})

//api for login
app.post("/login", async (req, resp) => {
  console.log(req.body);
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body).select("-password"); //select("-city -name") for hide the password

    if (user) {
      resp.send(user);
    } else {
      resp.send({ result: "no user found" });
    }
  } else {
    resp.send({ result: "no user found" });
  }
});

app.get('/product/:id',async(req,resp)=>
{
let result=await Product.findOne({_id:req.params.id});
if(result)
{
  resp.send(result);
}
else{
  resp.send("No data found!");
}

})

app.listen(7000,()=>
{
  console.log("server started successfully!!");
});
