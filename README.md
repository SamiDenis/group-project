# GYM group-project 

## Description 

This is a project where we built out a JSON API from beginning to end! Using data we created, we choose to have instructors, classes, and bookings in our application. The purpose of our project is to go to a gym website and book a workout class at the gym. By booking a class, updating the booking, or deleting the booking, we have implemented full CRUD functuality. 

## Example

REST API Docs:

GET / - Root that will redirect you to /classes.

GET /Classes - Show information on the classes. 

GET /Classes/Instructors - Show information on the instructors. 

GET /Classes/Bookings - Show information for the bookings. 

POST /Classes/Bookings - Create a booking. 

PUT /Classes/Bookings/:id - Find a booking and update it. You will need to search by the ID of the class.

DELETE /Classes/Bookings/:id - Find a booking and delete it. You will need to search by the ID of the class. 


## Features

To start out at the Bronze level we built the models and linked them to the database. Then we got the data from our json files, seeded the database using the models, and finally built the routes.


## Technologies

For this project, we used Mongoose and Express. 

### Installing 

To set up this project you will first need to fork our repo by clicking on Fork in the top right corner and choosing where to fork to. Then you will click Clone or Download and copy the url. Next open your terminal and change to the directory you wish to work on the project. Here you will run the command 'git clone' followed by pasting the url you just copied. Hit enter. You can now change to the project repo. You can now run node index.js and open your code editor. In your chrome browser, go to localhost:8080. 

## Authors

https://github.com/SamiDenis/group-project

https://github.com/SamiDenis/group-project/issues

Bryant Pyram: xbry12
Lily Klopcic: Lilypk
SamiDenis: SamiDenis

