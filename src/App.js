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
        BooksAPI.getAll()
        .then(books => {
            this.setState(() => ({
                books: books
            }));

            // // Add book ids to their respective shelves
            // books.map(book => (
            //     this.state.shelves.find(shelf => shelf.key === book.shelf).books.push(book.id)
            // ));
        });
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <HomePage books={this.state.books} />
                )} />
                <Route path="/search" render={() => (
                    <SearchPage my_books={this.state.books} />
                )} />
            </div>
        )
    }
}

export default BooksApp
