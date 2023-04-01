import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Singleblog from '../Singleblog/Singleblog';
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    let totalSpent = 0;
    const handleTimeSpent = (readtime) =>{
        totalSpent = totalSpent + parseFloat(readtime);
    }
    return (
        <div className='blogs-container'>
            <div className='blogs'>
                {
                    blogs.map(blog => <Singleblog blog = {blog} key={blog.id} handleTimeSpent={handleTimeSpent}></Singleblog>)
                }
            </div>
            <div className='bookmark'>
                <div className='spent-time'>
                    <h1 className='spenttime-title'>Spent time on read : {totalSpent} min</h1>
                </div>
                <div className='bookmark-blogs-container'>
                    <h1 className='bookmark-blogs-title'>Bookmarked Blogs :</h1>
                </div>
            </div>
        </div>
    );
};

export default Blogs;