import './BusinessAnalyst.css';
import React, { useState,useEffect } from 'react';

function BusinessAnalyst() {
  const [visible, setVisibleSection] = useState('section1');
  const [selectedShop, setSelectedShop] = useState(null);
  const [shopData, setShopData] = useState('');
  const [selectedRide, setSelectedRide] = useState(null);
  const [rideData, setRideData] = useState('');
  const [formData, setFormData] = useState({
    option: '',
    text: '',
    check: false,
    radioOption: ''
  });

  const showSection = (section) => {
    setVisibleSection(section);
  };

  const handleShopIdChange = (event) => {
    setSelectedShop(event.target.value);
  };
  const handleRideIdChange = (event) => {
    setSelectedRide(event.target.value);
  };
  const handleSelectChange = (event) => {
    setVisibleSection(event.target.value);
  }; 
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Here, you can perform actions with the form data
    console.log('Form Data:', formData);
       // Example: You can fetch data from the server or perform other operations based on the form data
    // fetch('http://your-api-endpoint', {
    //   method: 'POST',
    //   body: JSON.stringify(formData),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then(response => response.json())
    // .then(data => {
    //   // Handle the response
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // });
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: fieldValue
    });
  };






  useEffect(() => {
    // Fetch shop data from shops.html

    fetch('shop_data_page.html')
      .then((response) => response.text())
      .then((data) => {
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(data, 'text/html');
        setShopData(htmlDocument);
      })
      .catch((error) => {
        console.error('Error fetching shop data:', error);
      });
  }, []);

  const renderShopContent = () => {
    if (shopData) {
      const selectedShopData = shopData.getElementById(selectedShop);
      return selectedShopData ? selectedShopData.innerHTML : null;
    }
    return null;
  };

  useEffect(() => {
    // Fetch shop data from shops.html
    fetch('ride_data_page.html')
      .then((response) => response.text())
      .then((data) => {
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(data, 'text/html');
        setRideData(htmlDocument);
      })
      .catch((error) => {
        console.error('Error fetching ride data:', error);
      });
  }, []);



  const renderRideContent = () => {
    if (rideData) {
      const selectedRideData = rideData.getElementById(selectedRide);
      return selectedRideData ? selectedRideData.innerHTML : null;
    }
    return null;
  };

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
                <h3>Shop information</h3>
  {/* Dropdown menu for shop selection */}
  <select value={selectedShop} onChange={handleShopIdChange}>
        <option value="">Select a shop</option>
        <option value="Adventures Emporium">Adventures Emporium</option>
        <option value="Whimsical Wares">Whimsical Wares</option>
        <option value="Imagination Station">Imagination Station</option>
        <option value="Wonderland Gifts">Wonderland Gifts</option>

        {/* Add more options for other shops as needed */}
      </select>

      {/* Render shop content based on the selected shop */}
      <div className="shopContent" dangerouslySetInnerHTML={{ __html: renderShopContent() }}></div>
      </div>
    </div>



            <div style={{ display: visible === 'section2' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>Ride data info</h2>
                <h3>Ride information</h3>

                
                
                 {/* Dropdown menu for shop selection */}
                 <select value={selectedRide} onChange={handleRideIdChange}>
                    <option value="">Select a Ride</option>
                    <option value="Speedster Sprint">Speedster Sprint</option>
                    <option value="Pirate's Cove">Pirate's Cove</option>
                    <option value="Twisted Twister">Twisted Twister</option>
                    <option value="Jungle Safari">Jungle Safari</option>
                    <option value="Magical Meadows">Magical Meadows</option>
                    <option value="Lunar Leap">Lunar Leap</option>
                    <option value="Aquatic Adventure">Aquatic Adventure</option>
                    <option value="Rolling Thunder">Rolling Thunder</option>
                    <option value="Space Explorers">Space Explorers</option>
                    <option value="Fantasy Flight">Fantasy Flight</option>
                    <option value="Western Roundup">Western Roundup</option>
                    <option value="Dino Expedition">Dino Expedition</option>
                    <option value="Whirlwind Whiz">Whirlwind Whiz</option>
                    <option value="Time Traveler">Time Traveler</option>
                    <option value="Galactic Odyssey">Galactic Odyssey</option>
                    <option value="Tropical Splash">Tropical Splash</option>
                    <option value="Wildfire Run">Wildfire Run</option>
                    <option value="Dragon's Lair">Dragon's Lair</option>
                    <option value="Enchanted Carousel">Enchanted Carousel</option>
                    <option value="Skyward Soar">Skyward Soar</option>
                    <option value="Mystic Falls">Mystic Falls</option>

        {/* Add more options for other shops as needed */}
                  </select>

      {/* Render shop content based on the selected shop */}
          <div className="rideContent" dangerouslySetInnerHTML={{ __html: renderRideContent() }}></div>

               
          </div>
        </div>
            <div style={{ display: visible === 'section3' ? 'block' : 'none' }}>
              <div className="optiontextbox">
                <h2>Park Information//Reports</h2>
                <p>Here are some important business info about the theme park, please fill out the form down below!</p>
                
                <form onSubmit={handleFormSubmit}>
      
      <label>
         Report options:
        <select name="option" value={formData.option} onChange={handleInputChange}>
          <option value="Select an option">Select an option</option>
          <option value="Costumer info">Costumer info report</option>
          <option value="Business info">Business info report</option>
          {/* Add your options here */}
        </select>
      </label>
      <br />

      <label>
        Text Input:
        <input type="text" name="text" value={formData.text} onChange={handleInputChange} />
      </label>
      <br />

      <label>
        Checkbox:
        <input type="checkbox" name="check" checked={formData.check} onChange={handleInputChange} />
      </label>
      <br />

      {/* Radio buttons example */}
   
      <h1 class="date-period">Date Period</h1>
      <label>
        Monthly:
        <input
          type="radio"
          name="radioOption"
          value="option1"
          checked={formData.radioOption === 'option1'}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Weekly:
        <input
          type="radio"
          name="radioOption"
          value="option2"
          checked={formData.radioOption === 'option2'}
          onChange={handleInputChange}
        />
      </label>
      <br />
    

      <input type="submit" value="Submit" />
    </form>

              </div>
            </div>

            
            </div>
          </div>
        </div>
      


</div>

   


    
  );
}

export default BusinessAnalyst;
