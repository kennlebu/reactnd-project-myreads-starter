import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';
import * as BooksAPI from './BooksAPI';

class Book extends Component {
    update = (new_shelf) => {
        BooksAPI.update(this.props.book, new_shelf)
        .then(() => {
            if(this.props.rearrange) {
                // This will reload the books so that they appear in
                // the right shelves after moving.
                this.props.rearrange();
            }
        })
    }
    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${'imageLinks' in this.props.book ? this.props.book.imageLinks.thumbnail : ''})`}}></div>
                    <BookShelfChanger currentShelf={this.props.book.shelf} updateShelf={this.update} />
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">
                    {'authors' in this.props.book && 
                    this.props.book.authors.map((author, index) => (
                        `${author}` +
                        `${(this.props.book.authors.length > 1 && index < (this.props.book.authors.length - 1)) ? ', ' : ''}`
                    ))}
                </div>
            </div>
        )
    }
}

export default Book;
