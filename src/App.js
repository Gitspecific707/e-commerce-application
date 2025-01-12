
import './App.css';
import Nav from './Component/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Component/Footer';
import SignUp from './Component/SignUp';
import AddProduct from './Component/AddProduct';
import Login from './Component/Login';
import PrivateComponent from './Component/PrivateComponent';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route element={<PrivateComponent/>}>
    <Route path="/" element={<h1>product list component</h1>}/>
    <Route path='/Add' element={<AddProduct/>}/>
    <Route path='/update' element={<h1>update product</h1>}/>
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
