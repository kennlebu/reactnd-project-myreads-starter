import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class SearchPage extends Component {
    state = {
        query: '',
        books: [],
        no_books: false
    }

    doSearch = (query) => {
        BooksAPI.search(query)
        .then(results => {
            if(results.error) {
                this.setState(() => ({
                    no_books: true
                }))
            } else {
                this.setState(() => ({
                    books: results.map(search_book => {
                        let m_book = this.props.my_books.find(b => b.id === search_book.id);
                        search_book['shelf'] = m_book ? m_book.shelf : '';
                        return search_book;
                    }),
                    no_books: false
                }))
            }
        })
    }

    clearSearch = () => {
        this.setState(() => ({
            books: [],
            no_books: false
        }))
    }

    search = (query) => {
        this.setState(() => ({
            query: query
        }))

        if(query) {
            this.doSearch(query);
        } else {
            this.clearSearch();
        }
    }

    render() {
        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/" className="close-search">Close</Link>
                        <div className="search-books-input-wrapper">
                            {/*
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                            */}
                            <input type="text" placeholder="Search by title or author"
                                value={this.state.query}
                                onChange={(event) => this.search(event.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="search-books-results">
                    {this.state.no_books && <h2 className="no-books-found">No books were found</h2>}
                    {!this.state.no_books && <ol className="books-grid">
                        {this.state.books.map(book => (
                            <li key={book.id}>
                                <Book book={book} />
                            </li>
                        ))}
                    </ol>}
                </div>
            </div>
        )
    }
}

export default SearchPage;
