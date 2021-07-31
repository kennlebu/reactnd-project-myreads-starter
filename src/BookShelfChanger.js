import React from 'react';

function BookShelfChanger(props) {
    return (
        <div className="book-shelf-changer">
            <select defaultValue={props.currentShelf || 'none'} onChange={(event) => props.updateShelf(event.target.value)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

export default BookShelfChanger;
