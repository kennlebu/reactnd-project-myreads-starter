import React, { Component } from 'react';

const shelves = [
    { key: "wantToRead", label: "Want to Read" },
    { key: "currentlyReading", label: "Currently Reading" },
    { key: "read", label: "Read" }
];

class HomePage extends Component {
    state = {
        books: []
    }
    componentDidMount() {
        //TODO: Fetch books
    }
    render() {
        return {
            //TODO: Display shelves
        }
    }
}

export default HomePage;
