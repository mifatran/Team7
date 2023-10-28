import './Signup.css';
import { Link } from "react-router-dom"; 

function Signup() {
    return (
    <div className="Signup">
      <ul className="nav-headers">
        <li className="nav-item">Theme Park</li>
        <li className="nav-item">About</li>
        <li className="nav-item">
            {/* Endpoint to route to Signin component */} 
            <Link to="/">Sign in</Link> 
        </li>
        <li className="nav-item">Contact</li>
      </ul>

      <div className="signin-body">
        <form>
          <h3>Theme Park</h3>

          <label for="username">Email</label>
          <input type="text" placeholder="Email" id="username"/>

          <label for="username">Username</label>
          <input type="text" placeholder="Username" id="username"/>

          <label for="password">Password</label>
          <input type="password" placeholder="Password" id="password"/>

          <button>Sign up</button>
        </form>
      </div>
      
    </div>
    );
}

export default Signup;