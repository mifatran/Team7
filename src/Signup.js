import './Signup.css';
import { Link } from "react-router-dom"; 

function Signup() {
    return (
    <div className="Signup">
      <ul className="nav-headers-su">
        <li className="nav-item-su">Theme Park</li>
        <li className="nav-item-su">About</li>
        <li className="nav-item-su">
            {/* Endpoint to route to Signin component */} 
            <Link to="/">Sign in</Link> 
        </li>
        <li className="nav-item-su">Contact</li>
      </ul>

      <div className="signup-body">
        <form className="signup-form">
          <h3>Sign up</h3>

          <label for="username">Email</label>
          <input type="text" placeholder="Email" id="email"/>

          <label for="username">Username</label>
          <input type="text" placeholder="Username" id="username"/>

          <label for="password">Password</label>
          <input type="password" placeholder="Password" id="password"/>

          <button className="signup-button">Sign up</button>
        </form>
      </div>
      
    </div>
    );
}

export default Signup;