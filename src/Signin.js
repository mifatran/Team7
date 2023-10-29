import './Signin.css';
import { Link } from "react-router-dom"; 

function Signin() {
    return (
    <div className="Signin">
      <ul className="nav-headers">
        <li className="nav-item"><b>Theme Park</b></li>
        <li className="nav-item">About</li>
        <li className="nav-item">
            {/* Endpoint to route to Signup component */} 
            <Link to="/Signup">Sign up</Link> 
        </li>
        <li className="nav-item">Contact</li>
      </ul>

      <div className="signin-body">
        <form className="signin-form">
          <h3>Sign in</h3>

          <label for="username">Enter Your Username</label>
          <input type="text" placeholder="Username" id="username"/>

          <label for="password">Password</label>
          <input type="password" placeholder="Password" id="password"/>

          <button className="login-button">Log In</button>
        </form>
      </div>
      
    </div>
    );
}

export default Signin;
