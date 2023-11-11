import './BusinessAnalyst.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom"; 

function BusinessAnalyst() {
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
          <Link to='/'>Sign Out</Link>
        </li>
      </ul>

        <div className="welcome-back-employee">
          Welcome back, {"{"}BusinessAnalyst{"}"}!
        </div>
        <div className="group">
          <div className="view">
            <div className="mainbox">
            <div className="menubox">
                        <div className="Menutxt">Menu</div>
            </div>
            <div className="optionbox">
              <button className="AccInfoButton" onClick={() => showSection('section1')}>
                Shop Data
              </button>
              <button className="TicketInfoButton"onClick={() => showSection('section2')}>
                Ride Data
              </button>
              <button className="ParkInfoButton"onClick={() => showSection('section3')}>
                View Report
              </button>
              <button className="DeleteButton" onClick={() => showSection('section4')}>
              Delete Account
              </button>
            
            </div>
            <div className="Menutxt">Menu</div>
            

            <div style={{ display: visible === 'section1' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>Shop-data info</h2>
                <h3>Shop ID: </h3>
                  <div class = "Account-Info">
                  <table>
                      <tr>
                        <th>Shop Name </th>
                        <th>Shop id </th>
                        <th>Location </th>
                        <th>Product type </th>
                        <th>Product type sold</th>
                        <th>Revenue </th>
                        <th>Expenses </th>
                        <th>Profit </th>
                        <th>Zone code </th>
                      </tr>
                      <tr>
                        <td>Adventures Emporium</td>
                        <td>SHOP6093</td>
                        <td>Blooming Meadows</td>
                        <td>Apparel</td>
                        <td>48</td>
                        <td>79680</td>
                        <td>12031</td>
                        <td>67649</td>
                        <td>ZONE0001</td>

                      </tr>
                  </table>
                  <p> Update the above information
                  </p>
                  
                    <div className="Shopdatainfo">
                      <form id="edit" method="POST" action="">
                          <p>
                              <label for="Shop id ">Shop ID #:  </label>
                              <input id="Shopid" type="text" name="username1" value=""/>
                  
                          </p>
                          <p>
                              <button id="update1submit" type="submit">Submit</button>
                          </p>

                      </form>
                      <h2> Security Information
                       </h2>
                       <table>
                      <tr>
                        <th>Employee ID: </th>
                      </tr>
                      <tr>
                        <td>######</td>
                      </tr>
                      </table>
                  <p> Forgot employee id #?</p>
                  <div className="UpdateAccPasSection">
                      <form id="edit" method="POST" action="">
                          <p>
                          <label for="Password ">Employee Username:  </label>
                              <input id="Password" type="text" name="username1" value=""/>
  
                              <label for="Password ">Employee Password:  </label>
                              <input id="Password" type="text" name="username1" value=""/>
  
                          </p>
                          <p>
                              <button id="update1submit" type="submit">Submit</button>
                          </p>

                      </form>
                   </div>
                   </div>
                  </div>
              </div>
            </div>

            <div style={{ display: visible === 'section2' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>Ride data info</h2>
                <h3>Ride information</h3>
                <table>
                      <tr>
                        <th>ride_id </th>
                        <th>Zone_code</th>
                        <th>Description</th>
                        <th>RideName</th>
                        <th>SafetyRules</th>
                        <th>NumDailyRiders</th>
                        <th>RideType</th>
                        <th>OperationStatus</th>
                        <th>Accessibility_Attraction</th>
                      </tr>
                      <tr>
                        <td>RIDE0001</td>
                        <td>ZONE0002</td>
                        <td>Galactic Odyssey</td>
                        <td>To a trip the sky and beyond</td>
                        <td>Strict harnessing and height restrictions enforced.</td>
                        <td>325</td>
                        <td>Thrill</td>
                        <td>Active</td>
                        <td>N/A</td>
                      </tr>
                      <tr>
                      <td>RIDE0002</td>
                        <td>ZONE0001</td>
                        <td>Tropical Splash</td>
                        <td>Take a splash</td>
                        <td>Moderate speed, secure seating, and mild height restrictions.</td>
                        <td>210</td>
                        <td>Water</td>
                        <td>Active</td>
                        <td>Available</td>
                      </tr>
                      <tr>
                      <td>RIDE0003</td>
                        <td>ZONE0003</td>
                        <td>Wildfire run</td>
                        <td>Run like wildfire</td>
                        <td>Strict safety harnesses, no loose items allowed on ride.</td>
                        <td>450</td>
                        <td>Thrill</td>
                        <td>Active</td>
                        <td>N/A</td>
                      </tr>
                      <tr>
                      <td>RIDE0004</td>
                        <td>ZONE0004</td>
                        <td>Dragon's Lair</td>
                        <td>Steal the dragon's treasure</td>
                        <td>Family-friendly ride with secure seating and lower speed.</td>
                        <td>150</td>
                        <td>Casual</td>
                        <td>Active</td>
                        <td>Available</td>
                      </tr>
                </table>
                <p>Complete the section below to a specfic ride data</p>
                <div className="Rideinfo">
                      <form id="edit" method="POST" action="">
                          <p>
                              <label for="Rideid ">Ride_id #:  </label>
                              <input id="Rid" type="text" name="username1" value=""/>
                              <label for="Employeeid">Employee id #: </label>
                              <input id="Eid" type="text" name="username1" value=""/>
                         
   


                          </p>
                          <p>
                              <button id="update1submit" type="submit">Submit</button>
                          </p>

                      </form>
                  </div>
                  <br></br><br></br><br></br><br></br>
       

                 <p> 
                  You must type in your employee id:<br></br>
                  This shows that you authorized to view your data.
                  </p>


              </div>
            </div>

            <div style={{ display: visible === 'section3' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>Park Information</h2>
                <p>Here are some important business info about the theme park!</p>
                <br></br>

                <h3>Ride Danger</h3>
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
                <h3>Business info</h3>
                <table>
                      <tr>
                        <th>Business info  </th>
                        <th>Business info</th>

                      </tr>
                      <tr>
                        <td>The placeholdinator</td>
                        <td>placeholdinatorazone</td>

                      </tr>
                  </table>
                <br></br>
                <h3>Visitor Trends</h3>
                <table class = "Visitor" id = "VisitorInfo">
                       <tr>
                        <th>Visitor info </th>
                        <th>Visitor info  </th>
                        <th>Visitor info  </th>
                        <th>Visitor info  </th>
                        <th>Visitor info  </th>
                      </tr>
                      <tr>
                        <td>The placeholdinator</td>
                        <td>placeholdinatorazone</td>
                        <td>I have no idea this is a placeholder</td>
                        <td>I have no idea this is a placeholder</td>
                        <td>The placeholdinator</td>

                      </tr>
                 </table>
                  <br></br>
                 <h3>More Information</h3>
                 <p> For explaining the park info <br>
                 </br>For explaining the park info. <br></br> </p>

              </div>
            </div>

            <div style={{ display: visible === 'section4' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>Are you sure you want to delete your account?</h2>
                <p> Deleting your account will mean that you'll know longer have access to it and your information will be deleted. Are you ok with that?</p>
                <button className="DeleteAccButtonConfirm"onClick={() => showSection('section5')}>
                Yes, that's ok.
              </button>

              </div>
            </div>
            </div>
          </div>
        </div>
      


</div>

   

    
  );
}

export default BusinessAnalyst;
