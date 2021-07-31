import React, { Component } from 'react';
import Book from './Book';

class Shelf extends Component {
    rearrangeBooks = () => {
        this.props.refreshBooks();
    }

    render() {
        return (
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.shelf.label}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.props.books.filter((b) => b.shelf === this.props.shelf.key)
                            .map((book) => (
                                <li key={book.id}>
                                    <Book book={book} rearrange={this.rearrangeBooks} />
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default Shelf;
