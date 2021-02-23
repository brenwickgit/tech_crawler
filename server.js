//Global Dependencies
const express = require('express');
const path = require('path');

//Constants
const app = express();
app.use(express.json());

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

//Define Routes
app.use('/api/amazon', require('./api/amazon'));
app.use('/api/newegg', require('./api/newegg'));
app.use('/api/walmart', require('./api/walmart'));
app.use('/api/microcenter', require('./api/microcenter'));
app.use('/api/slickdeals', require('./api/slickdeals'));
app.use('/api/gearbest', require('./api/gearbest'));

//Serve static assets in production
// if(process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static(path.resolve(__dirname, 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
// }

const PORT = process.env.PORT || 5000;

//Port listening
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
