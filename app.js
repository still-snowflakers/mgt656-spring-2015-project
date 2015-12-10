'use strict';

// Import our express and our configuration
var express = require('express');
var configure = require('./config.js');

// Import our controllers
var indexControllers = require('./controllers/index.js');
var aboutControllers = require('./controllers/about.js');
var eventControllers = require('./controllers/events.js');


// Create our express app
var app = express();

function renderView (view) {
    return function (request, response) {
        var contextData = {};
        response.render(view, contextData);  
    }
}

// Configure it
configure(app);

// Add routes mapping URLs to controllers
app.get('/', indexControllers.index);
app.get('/about', aboutControllers.about);
app.get('/events', eventControllers.listEvents);
app.get('/events/new', eventControllers.newEvent);
app.get('/api/events/', eventControllers.api);
<<<<<<< HEAD
app.get('/events/:id([0-9]+)', eventControllers.eventDetail); 
app.get('/api/events/:id([0-9]+)', eventControllers.apidetail);
=======
app.get('/events/:id([0-9]+)', eventControllers.eventDetail);
app.post('/events/:id([0-9]+)', eventControllers.rsvp);
>>>>>>> b7fc0b2c21a8df7c3ff867af44f7fa3f1eea2ca7
app.post('/events/new', eventControllers.saveEvent);
app.get('/faq', renderView('faq.html'));
app.get('/terms', renderView('terms.html'));
app.get('/contact', renderView('contact.html'));



module.exports = app;

