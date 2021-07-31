import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

const shelves = [
    { key: "currentlyReading", label: "Currently Reading", books: [] },
    { key: "wantToRead", label: "Want to Read", books: [] },
    { key: "read", label: "Read", books: [] }
];

class HomePage extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {shelves.map(shelf => (
                            <Shelf key={shelf.key} shelf={shelf} books={this.props.books} />
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default HomePage;
