# Plan for project domain 

## Steps 

We decided we will do a gym for our project. The steps are:

1. Make our data in json format
2. Make our models
3. Seed our database
4. Make routes 
5. Check routes in postman
6. Make readme file
7. Deploy on Heroku 

## Plan

Classes model -  non-user
Properties:
Name
Description
Time
Price

Instructor model - non-user
Properties:
first name
last name
bio

Booking model - user
Properties:
date
if-booked

Routes- 

GET / - Root that will redirect you to /classes.

GET /Classes - Show information on the classes. 

GET /Classes/Instructors - Show information on the instructors. 

GET /Classes/Bookings - Show information for the bookings. 

POST /Classes/Bookings - Create a booking. 

PUT /Classes/Bookings/:id - Find a booking and update it. You will need to search by the ID of the class.

DELETE /Classes/Bookings/:id - Find a booking and delete it. You will need to search by the ID of the class. 

