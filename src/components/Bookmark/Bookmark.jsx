import React from 'react';
import './Bookmark.css'
const Bookmark = ({bookmarked}) => {
    // console.log(bookmarked)
    return (
        <div>
            {
                bookmarked.map(bookmark => <h4 className='bookmark-title'>{bookmark.title}</h4>)
            }
        </div>
    );
};

export default Bookmark;