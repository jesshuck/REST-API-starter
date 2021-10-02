REST API starter
This application completes the week 1 assessment criteria

Installation
To initialise the project you will need to install several dependencies from NPM.

To achieve this open up a git bash/powershell terminal/window from the repo directory (or navigate via the command line) and run the command:

$ npm install
Running the application
In order to run the application, from your git bash/powershell terminal/window run:

$ npm start
API Listening on http://localhost:8080
Stopping the application
In order to stop the application from the git bash/powershell terminal/window press CTRL + C when focused on it. This will stop the server running!

Running on a different port
To start the application on an alternative port to the default (8080) from your git bash terminal run:

$ PORT=9090 npm start
API Listening on http://localhost:9090
alternatively you could alter the start.js file on line 3

Functionality
n.b: For these commands anything surrounded by angled braces <> needs to be replaced to correlate with your individual version of this application.

CREATE
To create the example product run the command:

$ curl -s -X POST http://localhost:8080/product/create -H 'Content-type:application/json' -d '{"name":"example product", "description":"this is an example", "price":9.99}'
READ (all)
To read all of the products run the command:

$ curl -s -X GET http://localhost:8080/product/read
READ (one)
To read one of the products run the command:

$ curl -s -X GET http://localhost:8080/product/read/<id>
UPDATE
To update one of the products run the command:

$ curl -s -X PUT http://localhost:8080/product/update/<id> -H 'Content-type:application/json'  -d '{"name":"updated product", "description":"its brand new", "price":99.99}'
DELETE
To delete one of the products run the command:

$ curl -s -X DELETE http://localhost:8080/product/delete/<id>
Testing
To run tests, from the terminal run the command:

$ npm test
This will invoke the test command in the package.json file and run the jest tests.
