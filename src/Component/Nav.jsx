
import { Link, useNavigate } from "react-router-dom";


const Nav=()=>
{ const auth=localStorage.getItem('user');
    const navigate=useNavigate();

    const logout=()=>
    {
        
       
        localStorage.clear();
        navigate('/signup');
    }
    const logoClick=()=>
    {
        if(auth)
        {
            navigate('/');
        }
        else{
            navigate('/Login');
        }
    }
    

  
    return(
        
        <div>
        <img className='logo' onClick={logoClick} src="/ecomm.png" alt="logo" />
        {
            auth?
             <ul className="nav-ul">
       
            <li><Link to="/">Product</Link></li>
            <li><Link to="/Add">Add Product</Link></li>
            <li><Link to="/Update">Update Product</Link></li>
           <li><Link to="/Profile">Profile</Link></li>
           <li> <Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li></ul>
            :<ul className="nav-ul" style={{textAlign:"right"}}>
            <li><Link to="/signup">SignUp</Link></li>
            <li><Link to="/Login">Login</Link></li></ul>
        }
       </div>
    
    )
}
    export default Nav;