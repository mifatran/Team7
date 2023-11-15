const http = require('http');
const sql = require('mssql');

    const config = {
        user: 'CSThemeParkAdminTeam7', 
        password: '2023DBTeam7!', 
        server: '2023amuseparkdb.database.windows.net', 
        database: '2023Team7AmuseParkDB', 
        options: {
            encrypt: true
            connectTimeout: 30000,
        }
    }
;
const server = http.createServer(async (req, res) => {
    if (req.url === 'https://themeparkwebapp2023.azurewebsites.net/api/event' && req.method === 'GET') {
      try {
        // Connect to the database
        await sql.connect(config);
   
        // Query to fetch data from the login table
        const result = await sql.query('SELECT * FROM special_events');
   
        // Send the data as JSON
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
        // Close the database connection
        await sql.close();
      }
    }
    if (req.url === 'https://themeparkwebapp2023.azurewebsites.net/api/ticket' && req.method === 'GET') {
      try {
        // Connect to the database
        await sql.connect(config);
   
        // Query to fetch data from the login table
        const result = await sql.query('SELECT TicketType, Prices FROM tickets GROUP BY Prices, TicketType');
   
        // Send the data as JSON
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        return res.end('Internal Server Error');
      } finally {
        // Close the database connection
        // await sql.close();
      }
    }
    if (req.url === 'https://themeparkwebapp2023.azurewebsites.net/api/ride1' && req.method === 'GET') {
      try {
        // Connect to the database
        await sql.connect(config);
   
        // Query to fetch data from the login table
        const result = await sql.query("SELECT * FROM ride_info WHERE Zone_code = 'ZONE0001'");
   
        // Send the data as JSON
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
        // Close the database connection
        // await sql.close();
      }
    }
    if (req.url === 'https://themeparkwebapp2023.azurewebsites.net/api/stall1' && req.method === 'GET') {
      try {
        // Connect to the database
        await sql.connect(config);
   
        // Query to fetch data from the login table
        const result = await sql.query("SELECT * FROM food_stalls WHERE Zone_code = 'ZONE0001'");
   
        // Send the data as JSON
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
        // Close the database connection
        // await sql.close();
      }
    }
    if (req.url === 'https://themeparkwebapp2023.azurewebsites.net/api/shop1' && req.method === 'GET') {
      try {
        // Connect to the database
        await sql.connect(config);
   
        // Query to fetch data from the login table
        const result = await sql.query("SELECT * FROM Merchandise WHERE Zone_code = 'ZONE0001'");
   
        // Send the data as JSON
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
        // Close the database connection
        await sql.close();
      }
    }
    if (req.url === 'https://themeparkwebapp2023.azurewebsites.net/api/service1' && req.method === 'GET') {
      try {
        // Connect to the database
        await sql.connect(config);
   
        // Query to fetch data from the login table
        const result = await sql.query("SELECT * FROM amenities_and_service WHERE Zone_code = 'ZONE0001'");
   
        // Send the data as JSON
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
        // Close the database connection
        //await sql.close();
      }
    }

    if (req.url === 'https://themeparkwebapp2023.azurewebsites.net/api/ride2' && req.method === 'GET') {
      try {
        // Connect to the database
        await sql.connect(config);
   
        // Query to fetch data from the login table
        const result = await sql.query("SELECT * FROM ride_info WHERE Zone_code = 'ZONE0002'");
   
        // Send the data as JSON
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
        // Close the database connection
        //await sql.close();
      }
    }
    if (req.url === 'https://themeparkwebapp2023.azurewebsites.net/api/stall2' && req.method === 'GET') {
      try {
        // Connect to the database
        await sql.connect(config);
   
        // Query to fetch data from the login table
        const result = await sql.query("SELECT * FROM food_stalls WHERE Zone_code = 'ZONE0002'");
   
        // Send the data as JSON
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
        // Close the database connection
        //await sql.close();
      }
    }
    if (req.url === 'https://themeparkwebapp2023.azurewebsites.net/api/shop2' && req.method === 'GET') {
      try {
        // Connect to the database
        await sql.connect(config);
   
        // Query to fetch data from the login table
        const result = await sql.query("SELECT * FROM Merchandise WHERE Zone_code = 'ZONE0002'");
   
        // Send the data as JSON
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
        // Close the database connection
        //await sql.close();
      }
    }
    if (req.url === 'https://themeparkwebapp2023.azurewebsites.net/api/service2' && req.method === 'GET') {
      try {
        // Connect to the database
        await sql.connect(config);
   
        // Query to fetch data from the login table
        const result = await sql.query("SELECT * FROM amenities_and_service WHERE Zone_code = 'ZONE0002'");
   
        // Send the data as JSON
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
        // Close the database connection
        //await sql.close();
      }
    }

    if (req.url === 'https://themeparkwebapp2023.azurewebsites.net/api/ride3' && req.method === 'GET') {
      try {
        // Connect to the database
        await sql.connect(config);
   
        // Query to fetch data from the login table
        const result = await sql.query("SELECT * FROM ride_info WHERE Zone_code = 'ZONE0003'");
   
        // Send the data as JSON
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
        // Close the database connection
        //await sql.close();
      }
    }
    if (req.url === 'https://themeparkwebapp2023.azurewebsites.net/api/stall3' && req.method === 'GET') {
      try {
        // Connect to the database
        await sql.connect(config);
   
        // Query to fetch data from the login table
        const result = await sql.query("SELECT * FROM food_stalls WHERE Zone_code = 'ZONE0003'");
   
        // Send the data as JSON
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
        // Close the database connection
        //await sql.close();
      }
    }
    if (req.url === 'https://themeparkwebapp2023.azurewebsites.net/api/shop3' && req.method === 'GET') {
      try {
        // Connect to the database
        await sql.connect(config);
   
        // Query to fetch data from the login table
        const result = await sql.query("SELECT * FROM Merchandise WHERE Zone_code = 'ZONE0003'");
   
        // Send the data as JSON
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
        // Close the database connection
        //await sql.close();
      }
    }
    if (req.url === 'https://themeparkwebapp2023.azurewebsites.net/api/service3' && req.method === 'GET') {
      try {
        // Connect to the database
        await sql.connect(config);
   
        // Query to fetch data from the login table
        const result = await sql.query("SELECT * FROM amenities_and_service WHERE Zone_code = 'ZONE0003'");
   
        // Send the data as JSON
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
        // Close the database connection
        //await sql.close();
      }
    }

    if (req.url === 'https://themeparkwebapp2023.azurewebsites.net/api/ride4' && req.method === 'GET') {
      try {
        // Connect to the database
        await sql.connect(config);
   
        // Query to fetch data from the login table
        const result = await sql.query("SELECT * FROM ride_info WHERE Zone_code = 'ZONE0004'");
   
        // Send the data as JSON
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
        // Close the database connection
        //await sql.close();
      }
    }
    if (req.url === 'https://themeparkwebapp2023.azurewebsites.net/api/stall4' && req.method === 'GET') {
      try {
        // Connect to the database
        await sql.connect(config);
   
        // Query to fetch data from the login table
        const result = await sql.query("SELECT * FROM food_stalls WHERE Zone_code = 'ZONE0004'");
   
        // Send the data as JSON
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
        // Close the database connection
        //await sql.close();
      }
    }
    if (req.url === 'https://themeparkwebapp2023.azurewebsites.net/api/shop4' && req.method === 'GET') {
      try {
        // Connect to the database
        await sql.connect(config);
   
        // Query to fetch data from the login table
        const result = await sql.query("SELECT * FROM Merchandise WHERE Zone_code = 'ZONE0004'");
   
        // Send the data as JSON
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
        // Close the database connection
        //await sql.close();
      }
    }
    if (req.url === 'https://themeparkwebapp2023.azurewebsites.net/api/service4' && req.method === 'GET') {
      try {
        // Connect to the database
        await sql.connect(config);
   
        // Query to fetch data from the login table
        const result = await sql.query("SELECT * FROM amenities_and_service WHERE Zone_code = 'ZONE0004'");
   
        // Send the data as JSON
         res.writeHead(200, { 'Content-Type': 'application/json' });
         return res.end(JSON.stringify(result.recordset));
      } catch (error) {
        console.error('Error fetching data:', error.message);
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         return res.end('Internal Server Error');
      } finally {
        // Close the database connection
        await sql.close();
      }
    }

    else {
      // Handle other routes or requests
       res.writeHead(404, { 'Content-Type': 'text/plain' });
       res.end('Not Found');
    }
  });

const port =  process.env.PORT || 3001; 

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
