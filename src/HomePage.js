import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';
import * as BooksAPI from './BooksAPI'

const shelves = [
    { key: "currentlyReading", label: "Currently Reading" },
    { key: "wantToRead", label: "Want to Read" },
    { key: "read", label: "Read" }
];

class HomePage extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll()
        .then(books => {
            this.setState(() => ({
                books: books
            }));
        });
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {shelves.map(shelf => (
                            <Shelf key={shelf.key} shelf={shelf} books={this.state.books} />
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
