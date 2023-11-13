import './Maintenance.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom"; 

function Maintenance() {
  const [visible, setVisibleSection] = useState('section1');

  const showSection = (section) => {
    setVisibleSection(section);
  }
  
  
  
  return (
       <div className="App">
       <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Jomhuria&family=Josefin+Sans&family=Mitr:wght@200&display=swap" rel="stylesheet"></link>
      <ul className="nav-headers">
        <li className="nav-item"><u>DB Theme Park</u></li>
        <li className="nav-item" id='signout'>
        <Link to="/">Sign Out</Link>
          </li>
      </ul>

        <div className="welcome-back-visitor">
          Welcome back, {"{"}employee name{"}"}!
        </div>
        <div className="visitortype">
          Maintenance
        </div>

        <div className="group">
          <div className="view">
            <div className="mainbox">
            <div className="menubox">
                        <div className="Menutxt">Menu</div>
            </div>
            <div className="optionbox">
              <button className="AccInfoButton" onClick={() => showSection('section1')}>
                Account Information
              </button>
              <button className="HazardRep"onClick={() => showSection('section2')}>
                Hazard Report
              </button>
              <button className="RideBreakdowns"onClick={() => showSection('section3')}>
                Ride Breakdowns
              </button>
            
            </div>
            <div className="Menutxt">Menu</div>
            

            <div style={{ display: visible === 'section1' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>Your Account Information</h2>
                <h3>Visitor ID: </h3>
                  <div class = "Account-Info">
                  <table>
                      <tr>
                        <th>First Name </th>
                        <th>Last Name </th>
                        <th>Username </th>
                        <th>Email </th>
                        <th>Address </th>

                      </tr>
                      <tr>
                        <td>Jane</td>
                        <td>Doe</td>
                        <td>JaneUSer</td>
                        <td>EmailJaneUser@jane.com</td>
                        <td>EmailJaneUser Street</td>
   
                      </tr>
                  </table>
                  
                      <h2> Security Information
                       </h2>
                       <table>
                      <tr>
                        <th>Current Password </th>
                      </tr>
                      <tr>
                        <td>Jane234324</td>
                      </tr>
                      </table>

                  <p> Do you want to change your password?</p>
                  
                      <form id="UpdateAccPas" method="post" action="/submit">
                          <p>
                              <label for="Password ">New Password:  </label>
                              <input type="text" id="Password" name="Password" required/>
  
                          </p>
                          <p>
                              <button id="UpdateAccPasButton" type="submit">Submit</button>
                          </p>

                      </form>
                   </div>
                   
                  </div>
              </div>
            </div>

            <div style={{ display: visible === 'section2' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>Hazard Report</h2>
                <h3>Ride Breakdowns, Closer Inspection </h3>
                <p> The report below shows how many times a ride has broken down on a weekly or monthly basis</p>
                <table>
                      <tr>
                        <th>Year </th>
                        <th>Month/Week </th>
                        <th>Ride Name </th>
                        <th>Average/Total </th>
                      </tr>
                      <tr>
                        <td>2022</td>
                        <td>beep</td>
                        <td>Ridenameholder</td>
                        <td>Avgortotalholder</td>
                      </tr>

                </table>
 

                 </div>
              </div>
            </div>

            <div style={{ display: visible === 'section3' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>Ride Information</h2>
 
                <h3>Unavailable Rides</h3>
                <table>
                      <tr>
                        <th>Ride Names </th>
                        <th>Zone Area </th>

                      </tr>
                      <tr>
                        <td>The placeholdinator</td>
                        <td>placeholdinatorazone</td>

                      </tr>
                  </table>
                <br></br>
                <h3>Monthly Ride Breakdowns</h3>
                <table class = "Services" id = "ServiceInfo">
                       <tr>
                       <th>Month</th>
                        <th>Total issues</th>
                      </tr>
                      <tr>
                        <td>The placeholdinator</td>
                        <td>I have no idea this is a placeholder</td>

                      </tr>
                 </table>
                  <br></br>

              </div>
            </div>



            </div>
            </div>
        


  );
}


export default Maintenance;