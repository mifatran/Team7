import './App.css';

function App() {
  return (
    <div className="App">
      <ul className="nav-headers">
        <li className="nav-item">Theme Park</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Pricing</li>
        <li className="nav-item">Contact</li>
      </ul>

      <div className="signin-body">
        <form>
          <h3>Theme Park</h3>

          <label for="username">Username</label>
          <input type="text" placeholder="Email or Phone" id="username"/>

          <label for="password">Password</label>
          <input type="password" placeholder="Password" id="password"/>

          <button>Log In</button>
        </form>
      </div>
      
    </div>
  );
}

export default App;
