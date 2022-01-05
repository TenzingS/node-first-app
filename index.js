// Lets import the fs module to access the fileSystem
const fs = require('fs').promises;

// We can add the modules we imported from NPM using require
const express = require('express')

// Calling express as a function we create a basic web server
const app = express()

// This is the port where we will run our web server
const port = 3000

// This is how we define the routes for the API's in our web server
// where the .get makes references to the http GET method
// and the '/' is the route
// the attached callback function will be called each time we get 
// a GET request to the '/' route
// In the callback the parameteres we get:
// req includes all the request information, eg headers
// res is an object we use to respond the http call!
app.get('/', (req, res) => res.send({ Hello: 'World!' }))

// our new API endpoint to read a file from disk
// and send the results over http
app.get('/readFile', async (req, res) => {
    try{
        // When an Error is thrown in the try block the rest
        // of the block is not executed, execution continues
        // in the catch bloclk
          const fileContent = await fs.readFile('helloworld.txt','utf8');
          res.json({ 
          fileContent,
          error: false
        }); 
      } catch (err) {
        // In the catch block we receive the error as an argument
        // set response status to 500, to denote a internal error
        res.status(500);
        res.json({
          fileContent: null,
          error: true,
          errorMsg: err,
        })
      }
    });

// We make our webserver listen to an specific PORT
app.listen(
  port, 
  () => console.log(`app listening at http://localhost:${port}`)
);