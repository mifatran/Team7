import './Main_pg_cust.css';

function Main_pg_cust() {
  
  return (
    <div className='App'>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Jomhuria&family=Josefin+Sans&family=Mitr:wght@200&display=swap" rel="stylesheet"></link>
      <ul className='headers'>
        <li className='header_item'><b>DB Theme Park</b></li>
        <li className='header_item'>Sign Out</li>
      </ul>
      <div className='welcome'>
          <p className='welcome_line'><b>Welcome back to DB Theme Park!</b></p>
      </div>
      <div className='img_outer'>
          <img src='https://www.tripelle.com/wp-content/uploads/2019/05/Amusement-Parks-in-U.S..jpg' alt='Theme Park' className='image'></img>
      </div>
      <div>
          <p className='slogan'><b>Fun for everyone!</b></p>
          <p className='startyear'>Founded in 2022.</p>
      </div>
      <div>
        <p className='park_info'><b>Park Information</b></p>
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
          <th>Price</th>
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
        <li>Rides</li>
        <table className='ride_table'>
          <tr className='ride_columns'>
            <th>Ride</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </table>
        <li>Restaurant</li>
        <table className='food_table'>
          <tr className='food_columns'>
            <th>Restaurant</th>
            <th>Type</th>
          </tr>
        </table>
        <li>Merchandise Shop</li>
        <table className='shop_table'>
          <tr className='shop_columns'>
            <th>Shop</th>
          </tr>
        </table>
        </ul>
      </div>
    </div>

);
}
export default Main_pg_cust;
