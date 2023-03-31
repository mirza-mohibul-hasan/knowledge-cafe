import React, { useEffect, useState } from 'react';
import './Blogs.css'
const Blogs = () => {
    
    return (
        <div className='blogs-container'>
            <div className='blogs'>
                <h1>Blog goes here</h1>
            </div>
            <div className='bookmark'>
                <div className='spent-time'>
                    <h1 className='spenttime-title'>Spent time on read : </h1>
                </div>
                <div className='bookmark-blogs-container'>
                    <h1 className='bookmark-blogs-title'>Bookmarked Blogs :</h1>
                </div>
            </div>
        </div>
    );
};

export default Blogs;