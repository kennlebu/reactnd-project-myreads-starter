import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import HomePage from './HomePage'
import SearchPage from './SearchPage'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
    state = {
        books: [],
        shelves: [
            { key: "currentlyReading", label: "Currently Reading", books: [] },
            { key: "wantToRead", label: "Want to Read", books: [] },
            { key: "read", label: "Read", books: [] }
        ]
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        BooksAPI.getAll()
        .then(books => {
            this.setState(() => ({
                books: books
            }));
        });
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <HomePage books={this.state.books} reloadBooks={this.loadBooks} />
                )} />
                <Route path="/search" render={() => (
                    <SearchPage my_books={this.state.books} />
                )} />
            </div>
        )
    }
}

export default BooksApp
