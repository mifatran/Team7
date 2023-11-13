import './BusinessAnalyst.css';
import React, { useState } from 'react';

function BusinessAnalyst() {
  const [visible, setVisibleSection] = useState('section1');

  const showSection = (section) => {
    setVisibleSection(section);
  }
  
  
  return (
    <div className="App">
      <ul className="nav-headers">
        <li className="nav-item"><b>Theme Park</b></li>
        <li className="nav-item">Sign Out</li>
      </ul>

        <div className="Welcome-back-employee">
        

          <strong>Welcome back, {"{"}BusinessAnalyst{"}"}!</strong>
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
                      <form id="Shopdatainfo" method="POST" action="/submit">
                          
                              <div>
                              <label for="Shop id ">Shop ID #:  </label>
                              <input type="text" id="id" name="id"/>
                              </div>
                          
                          
                              <button id="Shopdatainfobutton" type="submit">Submit</button>
                          

                      </form>
                      <h2> Security Information
                      </h2>
                  <p> Need to input employee id in order to access Shopdata.</p>
                  <div className="UpdateAccPasSection">
                      <form id="edit" method="POST" action="/submit">
                          <div>
                          <label for="Employeeid">Employee ID:  </label>
                              <input type="text" id="Username" name="LastName"/>
                           </div>
                          
                              <button id="update1submit" type="submit">Submit</button>
                          

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
                      <form id="edit" method="POST" action="/submit">

                          
                          <div>
                          <label for="Employeeid">Employee ID:  </label>
                          <input type="text" id="Username" name="LastName"/>
                           </div>
              
                           <div>
                          <label for="Ride Id">Ride ID:  </label>
                          <input type="text" id="Username" name="LastName"/>
                           </div>
                    
                        <button id="update1submit" type="submit">Submit</button>
                          

                      </form>


                  </div>
 
                  </div>
                  <br></br><br></br><br></br><br></br>
       

                 <p> 
                  You must type in your employee id:<br></br>
                  This shows that you authorized to view your data.
                  </p>


              
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


            </div>
          </div>
        </div>
      


</div>

   

    
  );
}

export default BusinessAnalyst;
