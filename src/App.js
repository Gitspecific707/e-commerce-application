
import './App.css';
import Nav from './Component/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Component/Footer';
import SignUp from './Component/SignUp';
import AddProduct from './Component/AddProduct';
import Login from './Component/Login';
import PrivateComponent from './Component/PrivateComponent';
import ProductList from './Component/ProductList';
import UpdateProduct from './Component/UpdateProduct';

function App() {
  return (
    <div className="App">
    <BrowserRouter> 
    <Nav/>
    <Routes>
    <Route element={<PrivateComponent/>}>
    <Route path="/" element={<ProductList/>}/>
    <Route path='/Add' element={<AddProduct/>}/>
    <Route path='/update/:id' element={<UpdateProduct/>}/>
    <Route path='/Logout' element={<h1>Logout</h1>}/>
    <Route path='/Profile' element={<h1>Profile </h1>}/>
   
    </Route>
    <Route path='/SignUp' element={<SignUp/>}/>
    <Route path='/Login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
  
  
    </div>
  );
}

export default App;
