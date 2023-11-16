const http = require('http');
const sql = require('mssql');
    const config = {
        user: 'CSThemeParkAdminTeam7', 
        password: '2023DBTeam7!', 
        server: '2023amuseparkdb.database.windows.net', 
        database: '2023Team7AmuseParkDB', 
        options: {
            encrypt: true,
            connectTimeout: 30000,
        }
    }
;
const server = http.createServer(async (req, res) => {
    if (req.url === '/api/event' && req.method === 'GET') {
      try {
        await sql.connect(config);
        const result = await sql.query('SELECT * FROM special_events');
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
        // await sql.close();
      }
    }
    if (req.url === '/api/ticket' && req.method === 'GET') {
      try {
        await sql.connect(config);
        const result = await sql.query('SELECT TicketType, Prices FROM tickets GROUP BY Prices, TicketType');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        return res.end('Internal Server Error');
      } finally {
      }
    }
    if (req.url === '/api/ride1' && req.method === 'GET') {
      try {
        await sql.connect(config);
        const result = await sql.query("SELECT * FROM ride_info WHERE Zone_code = 'ZONE0001'");
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
      }
    }
    if (req.url === '/api/stall1' && req.method === 'GET') {
      try {
        await sql.connect(config);
        const result = await sql.query("SELECT * FROM food_stalls WHERE Zone_code = 'ZONE0001'");
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
      }
    }
    if (req.url === '/api/shop1' && req.method === 'GET') {
      try {
        await sql.connect(config);
        const result = await sql.query("SELECT * FROM Merchandise WHERE Zone_code = 'ZONE0001'");
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
        // await sql.close();
      }
    }
    if (req.url === '/api/service1' && req.method === 'GET') {
      try {
        await sql.connect(config);
        const result = await sql.query("SELECT * FROM amenities_and_service WHERE Zone_code = 'ZONE0001'");
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
        
      }
    }
    if (req.url === '/api/ride2' && req.method === 'GET') {
      try {
        await sql.connect(config);
        const result = await sql.query("SELECT * FROM ride_info WHERE Zone_code = 'ZONE0002'");
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
        
      }
    }
    if (req.url === '/api/stall2' && req.method === 'GET') {
      try {
        await sql.connect(config);
        const result = await sql.query("SELECT * FROM food_stalls WHERE Zone_code = 'ZONE0002'");
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
        
      }
    }
    if (req.url === '/api/shop2' && req.method === 'GET') {
      try {
        await sql.connect(config);
        const result = await sql.query("SELECT * FROM Merchandise WHERE Zone_code = 'ZONE0002'");
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
        
      }
    }
    if (req.url === '/api/service2' && req.method === 'GET') {
      try {
        await sql.connect(config);
        const result = await sql.query("SELECT * FROM amenities_and_service WHERE Zone_code = 'ZONE0002'");
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
        
      }
    }
    if (req.url === '/api/ride3' && req.method === 'GET') {
      try {
        await sql.connect(config);
        const result = await sql.query("SELECT * FROM ride_info WHERE Zone_code = 'ZONE0003'");
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
        
      }
    }
    if (req.url === '/api/stall3' && req.method === 'GET') {
      try {
        await sql.connect(config);
        const result = await sql.query("SELECT * FROM food_stalls WHERE Zone_code = 'ZONE0003'");
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
        
      }
    }
    if (req.url === '/api/shop3' && req.method === 'GET') {
      try {
        await sql.connect(config);
        const result = await sql.query("SELECT * FROM Merchandise WHERE Zone_code = 'ZONE0003'");
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
        
      }
    }
    if (req.url === '/api/service3' && req.method === 'GET') {
      try {
        await sql.connect(config);
        const result = await sql.query("SELECT * FROM amenities_and_service WHERE Zone_code = 'ZONE0003'");
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
        
      }
    }
    if (req.url === '/api/ride4' && req.method === 'GET') {
      try {
        await sql.connect(config);
        const result = await sql.query("SELECT * FROM ride_info WHERE Zone_code = 'ZONE0004'");
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
        
      }
    }
    if (req.url === '/api/stall4' && req.method === 'GET') {
      try {
        await sql.connect(config);
        const result = await sql.query("SELECT * FROM food_stalls WHERE Zone_code = 'ZONE0004'");
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
        
      }
    }
    if (req.url === '/api/shop4' && req.method === 'GET') {
      try {
        await sql.connect(config);
        const result = await sql.query("SELECT * FROM Merchandise WHERE Zone_code = 'ZONE0004'");
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
        
      }
    }
    if (req.url === '/api/service4' && req.method === 'GET') {
      try {
        await sql.connect(config);
        const result = await sql.query("SELECT * FROM amenities_and_service WHERE Zone_code = 'ZONE0004'");
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
        // await sql.close();
      }
    }
 if (req.url === '/api/ride' && req.method === 'GET') {
      try {
        await sql.connect(config);
   
      
        const result = await sql.query("\
        SELECT ride_info.RideName, ride_info.Description \
        FROM ride_info \
        WHERE ride_info.Accessibility_Attraction = 'Available'\
      ");
       const resultTest = await sql.query("SELECT ride_info.RideName AS InactiveRide, ride_info.Description AS InactiveDescript\
       FROM ride_info \
       WHERE ride_info.OperationStatus = 'Inactive'\ ");
       
       const responseData = {
        RideData: result.recordset,
        InactiveRides: resultTest.recordset,
      };
  
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(responseData));
      } catch (error) {
        console.error('Error fetching data:', error.message);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        return res.end('Internal Server Error');
      } finally {
     
        // await sql.close();
      }
    
  }else if (req.url=== '/api/purchaseTicket' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', async () => {
      try {
        await sql.connect(config);
        const { TicketsTypes, Amount, FirstName, LastName, Address, CardInfo } = JSON.parse(body);
        const calcPrice = (TicketsTypes, Amount) => {
          let Price = 0;
          switch(TicketsTypes){
            case 'DayPass':
              Price = Amount * 33;
            break;
            case 'Seasonal Pass':
              Price = Amount * 61;
            break;
            case 'Annual Pass':
              Price = Amount * 151;
            break;
            case 'Premium Pass':
              Price = Amount * 351;
            break;
          }
          return Price;
        }
        const Price = calcPrice(TicketsTypes, Amount);
        await sql.query(`
          INSERT INTO PurchasedTickets(TicketID, Date, TicketType, Cardnum, Firstname, LastName, Amount, Address, Price)
          VALUES
          (CONCAT('Tick', SUBSTRING(CONVERT(VARCHAR(255), NEWID()), 1, 4)),
          GETDATE(),
          '${TicketsTypes}', ${CardInfo}, '${FirstName}', '${LastName}', ${Amount}, '${Address}', ${Price});
        `);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ success: true, message: 'Ticket purchase successful' }));
      } catch (error) {
        console.error('Error processing ticket purchase:', error.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ success: false, message: 'Internal Server Error' }));
      } finally {
        // await sql.close();
      }
    });
  }
     if (req.url === '/api/issuelog' && req.method === 'GET') {
      try {
      await sql.connect(config);

        const result = await sql.query("SELECT * FROM issue_log");

         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
      // await sql.close();
      }
    }
    if (req.url === '/api/rideinfo' && req.method === 'GET') {
      try {
      await sql.connect(config);

        const result = await sql.query("SELECT * FROM ride_info");

         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
      // await sql.close();
      }
    }
    if (req.url === '/api/inactiveride' && req.method === 'GET') {
      try {
      await sql.connect(config);

        const result = await sql.query("SELECT RideID, RideName, Name FROM ride_info, theme_zone WHERE ride_info.Zone_code = theme_zone.Zone_code AND ride_info.OperationStatus = 'Inactive'");

         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
      // await sql.close();
      }
    }
    if (req.url === '/api/monthlybreakdowns' && req.method === 'GET') {
      try {
      await sql.connect(config);

        const result = await sql.query("SELECT MONTH(DateStart)AS MONTH, YEAR(DateStart) AS YEAR, COUNT(IssueRideID) AS BROKE_DOWN_RIDES FROM issue_log GROUP BY MONTH(DateStart), YEAR(DateStart)");

         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
      // await sql.close();
      }
    }
    if (req.url === '/api/maintenancestaff' && req.method === 'GET') {
      try {
      await sql.connect(config);

        const result = await sql.query("SELECT * FROM employee WHERE employee_id = 'EmpM0001'");

         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
      // await sql.close();
      }
    }
    if (req.url=== '/api/updateemppass' && req.method === 'POST') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', async () => {
        try {
          await sql.connect(config);
          const { CurrentPassword, Password, PermitCode } = JSON.parse(body);
          await sql.query(`
            UPDATE employee
            SET user_pass = '${Password}'
            WHERE user_pass = '${CurrentPassword}' AND Supervisor_code = ${PermitCode};
          `);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: true, message: 'Updated Password successfuly!' }));
        } catch (error) {
          console.error('Error processing:', error.message);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: false, message: 'Internal Server Error' }));
        } finally {
          // await sql.close();
        }
      });
    }
    if (req.url=== '/api/updateempwage' && req.method === 'POST') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', async () => {
        try {
          await sql.connect(config);
          const { CurrentPassword, Wage, PermitCode } = JSON.parse(body);
          await sql.query(`
            UPDATE employee
            SET hourly_pay = ${Wage}
            WHERE user_pass = '${CurrentPassword}' AND Supervisor_code = ${PermitCode};
          `);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: true, message: 'Updated Hourly Pay successfully!' }));
        } catch (error) {
          console.error('Error processing:', error.message);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: false, message: 'Internal Server Error' }));
        } finally {
          // await sql.close();
        }
      });
    }
    if (req.url=== '/api/updateridestat' && req.method === 'POST') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', async () => {
        try {
          await sql.connect(config);
          const { RideID, Status } = JSON.parse(body);
          const setStat = (Status) => {
            let Stat = '';
            switch(Status){
              case 'Active':
                Stat = 'Active'
              break;
              case 'Inactive':
                Stat = 'Inactive';
              break;
            }
            return Stat;
          }
          const Stat = setStat(Status);
          await sql.query(`
            UPDATE ride_info
            SET OperationStatus = '${Stat}'
            WHERE RideID = '${RideID}';
          `);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: true, message: 'Updated Status successfully' }));
        } catch (error) {
          console.error('Error processing:', error.message);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: false, message: 'Internal Server Error' }));
        } finally {
          // await sql.close();
        }
      });
    }



  else {
       res.writeHead(404, { 'Content-Type': 'text/plain' });
       return res.end('Not Found');
    }
  });
const port =  process.env.PORT || 3001; 
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
