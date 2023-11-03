import './MainPg.css';
import { Link } from "react-router-dom"; 

function MainPg() {
  
  return (
    <div className='App'>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Jomhuria&family=Josefin+Sans&family=Mitr:wght@200&display=swap" rel="stylesheet"></link>
      <ul className='headers'>
        <li className='header_item'><u>DB Theme Park</u></li>
        <li className='header_item' id='sign_up'> 
        <Link to='/Signup'>Sign up</Link>
        </li>
        <li className='header_item' id='sign_in'>
          <Link to='/Signin'>Sign in</Link>
        </li>
      </ul>
      <div className='welcome'>
          <p className='welcome_line'>Welcome back to DB Theme Park!</p>
      </div>
      <div className='img_outer'>
          <img src='https://www.tripelle.com/wp-content/uploads/2019/05/Amusement-Parks-in-U.S..jpg' alt='Theme Park' className='image'></img>
      </div>
      <div>
          <p className='slogan'>Fun for everyone!</p>
          <p className='startyear'>Founded in 2022.</p>
      </div>
      <div>
        <p className='park_info'>Park Information</p>
      </div>
      <div className='event'>
        <p className='events'><b>Events</b></p>
        <p className='event_invt'>Come attend one of the upcoming Db Theme Park latest events!</p>
        <p className='event_invt'>Admission payment at entrance of event location</p>
      </div>
      <table  className='event_table'>
        <tr className='event_columns'>
          <th>Event</th>
          <th>Date</th>
          <th>Description</th>
          <th>Location</th>
        </tr>
      </table>
      <div className='ticket'>
        <p className='tickets'><b>Tickets</b></p>
        <p className='ticket_info'>Want to visit DB Theme Park? Here are the ticket options and
        their prices below!</p>
        <p className='ticket_info'>Tickets are required to event the park.</p>
      </div>
      <table className='ticket_table'>
        <tr className='ticket_columns'>
          <th>Ticket type</th>
          <th>Cost</th>
        </tr>
      </table>
      <div className='theme_zone'>
        <p className='theme_zones'><b>Theme Zones</b></p>
        <ul>
        <li id='ride'>Rides</li>
        <table className='ride_table'>
          <tr className='ride_columns'>
            <th>Ride</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </table>
        <li id='restaurant'>Restaurant</li>
        <table className='food_table'>
          <tr className='food_columns'>
            <th>Restaurant</th>
            <th>Type</th>
          </tr>
        </table>
        <li id='shop'>Merchandise Shop</li>
        <table className='shop_table'>
          <tr className='shop_columns'>
            <th>Shop</th>
          </tr>
        </table>
        <li id='amenities'>Amenities and Service</li>
        <table className='amenities_table'>
          <tr className='amenities_columns'>
            <th>Amenity</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </table>
        </ul>
      </div>
    </div>

);
}
export default MainPg;
