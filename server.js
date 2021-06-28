// Dependencies
const express = require('express');
const cors = require('cors');

// Import Json files
const projects = require('./projects.json');
const about = require('./about.json');


// Create the app object
const app = express();

// Middleware
app.use(cors());


// Routes

// Home route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Retreieving projects
app.get('/projects', (req, res) => {
    res.json(projects);
});

// Retreiving about info
app.get('/about', (req, res) => {
    res.json(about);
})


// Listener 
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));