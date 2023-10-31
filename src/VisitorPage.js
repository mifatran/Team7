import './VisitorPage.css';
import React, { useState } from 'react';
import {Link} from "react-router-dom";
function VisitorPage() {
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

        <div className="welcome-back-visitor">
          Welcome back, {"{"}Visitor name{"}"}!
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
              <button className="TicketInfoButton"onClick={() => showSection('section2')}>
                Purchase a Ticket
              </button>
              <button className="ParkInfoButton"onClick={() => showSection('section3')}>
                Park Information
              </button>
              <button className="DeleteButton" onClick={() => showSection('section4')}>
              Delete Account
              </button>
            
            </div>
            <div className="Menutxt">Menu</div>
            

            <div style={{ display: visible === 'section1' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>Your Account Information</h2>
                  <div class = "Account-Info">
                    <span class = "FirstNamelabel" >Account Username: </span>
                    <br>
                    </br>
                    <span class = "FirstNamelabel" >First Name: </span>
                    <br>
                    </br>
                    <span class = "LastNamelabel" >Last Name: </span>
                  </div>
              </div>
            </div>

            <div style={{ display: visible === 'section2' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>Buy a ticket!</h2>
                <p>Section 2 content goes here.get you ticketsget you ticketget you ticketget you ticketget you ticketget you ticket please ..</p>
              </div>
            </div>

            <div style={{ display: visible === 'section3' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>Some things you should know before you get here.</h2>
                <p>Section 3 content goes here... Some things you should know before you get here. Park infoPark infoPark infoPark infoPark infoPark infoPark info</p>
              </div>
            </div>

            <div style={{ display: visible === 'section4' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>Are you sure you want to delete your account?</h2>
                <p> Deleting your account will mean that you'll know longer have access to it. Are you ok with that?</p>
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

export default VisitorPage;
