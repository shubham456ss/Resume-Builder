
import React from 'react';
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import '../static/Details.css'




const Navbar = () => {
     const { loginWithRedirect, logout,isAuthenticated , user} = useAuth0();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">

    <div className="container-fluid">
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-li">
          <Link className="nav-link active"  to='/'>Home</Link>
        </li>
        <li className="nav-li">
          <Link className="nav-link active"  to="/job">Jobs</Link>
        </li>
      </ul>

      <ul className="navbar-nav d-flex">
        {isAuthenticated?(
          <li className="nav-item justify-content-end ">
            <Link className="nav-link active" onClick={() => logout({returnTo: window.location.origin } )}>
            {user.email} | Logout  
            </Link>         
         </li>  
        ):(
          <li className="nav-item justify-content-end ">          
            <Link className="nav-link active" onClick={() => loginWithRedirect()}>Login</Link>
        </li>
        )}
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar