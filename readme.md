# Car Racing Application

## Description

This is a game app I developed during the Javascript/Frontend course in Rolling Scopes School.
There are two pages: Garage and Winners.
Garage shows the cars available for racing and has pagination.
Each page has ten cars. A car can be deleted or updated in terms of color and name.
There is an option to generate 20 more cars with random names and colors.

By clicking the button "Race", the user initiates the race of the cars displayed on the page. How fast a car is going and whether or not its engine breaks during the race - depends on a server, which randomly generates the speed and engine failures. If the engine of a car fails, the car stops and ceases to have a glooming bottom undeneath.

The winners are displayed on the page Winners.

## Installation

1. Run `git clone [repo name]` to download the repository to your local machine
2. Run `npm install` to install all the dependencies
3. Run `npm run start` to start the app in the development mode

## Server

The server is built based on `json-server` and was provided by the school.
The server is deployed to Heroku and runs on https://async-cars-backend.herokuapp.com/ 