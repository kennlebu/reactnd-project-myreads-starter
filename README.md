# MyReads Project

This is an react app that lets a user search for books, add them to a shelf and be able to move the books to different shelves.
This project is a submission for Udacity's React Fundamentals course.

## Installation

* Clone the project using `git clone https://github.com/kennlebu/reactnd-project-myreads-starter.git`
* Navigate into the project directory using `cd reactnd-project-myreads-starter`
* Install all project dependencies with `npm install`
* Start the development server with `npm start`
* The browser should open automatically and navigate to the project page on `localhost:3000`
* If the browser does not open automatically, open your browser of choice and go to URL `localhost:3000`

## Usage
- Click on the "Add a book" button on the bottom right of the screen to go to the search page
- Search for a book (See accepted search terms in the section below) and select the Shelf Changer icon at the bottom right of the book then select the shelf to move it to
- Click the Back button at the top left to go back to the home page
- Your books will be displayed on the three shelves.
- You can move a book between shelves by selecting the Shelf Changer icon at the bottom right of the book then select the shelf to move it to

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
