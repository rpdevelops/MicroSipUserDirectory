/*---------------------------------------------------------------------------
---------------------API TO MICROSIP - DIRECTORY OF USERS--------------------
------------------------MADE BY ROBSON PARADELLA ROCHA-----------------------
---------------------------------------------------------------------------*/
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
require('dotenv').config();
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });
//--------------------------------------------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
async function connectdb() {
    try{
        connection.connect();
    }
    catch(e) {
        console.log(e)
    }
}
connectdb().then(() => {
    app.get('/agenda', (req, res) => {
        connection.query('SELECT * FROM agenda', (error, results) => {
          const refr = {
              "refresh": 0,
              "items" : results
          }
          if (error) throw error;
          res.send(JSON.stringify(refr));
        });
      });
      
      app.listen(3000, () => {
        console.log('Server started, GET request by http://hostname:3000/agenda');
      });
})
