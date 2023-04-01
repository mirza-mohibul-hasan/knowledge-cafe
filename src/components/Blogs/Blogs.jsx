import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Singleblog from '../Singleblog/Singleblog';
import Bookmark from '../Bookmark/Bookmark';
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const [spenttime, setSpentTime] = useState(0);
    const handleTimeSpent = (readtime) =>{
        const newTime = spenttime + parseFloat(readtime);
        setSpentTime(newTime)
    }
    const [bookmarked, setBookmark] = useState([]);
    const handleBookmark = (blog) =>{
        const exist = bookmarked.find( bm=> bm.id === blog.id)
        // console.log(exist);
        if(!exist){
            const newBookmark = [...bookmarked, blog]
            setBookmark(newBookmark)
        }
        else{
            alert('Hello');
        }
        
    }
    // console.log(bookmarked)
    return (
        <div className='blogs-container'>
            <div className='blogs'>
                {
                    blogs.map(blog => <Singleblog blog = {blog} key={blog.id} handleTimeSpent={handleTimeSpent} handleBookmark ={handleBookmark}></Singleblog>)
                }
            </div>
            <div className='bookmark'>
                <div className='spent-time'>
                    <h1 className='spenttime-title'>Spent time on read : {spenttime} min</h1>
                </div>
                <div className='bookmark-blogs-container'>
                    <h1 className='bookmark-blogs-title'>Bookmarked Blogs : {bookmarked.length}</h1>
                    <Bookmark bookmarked = {bookmarked} key={bookmarked.id}></Bookmark>
                </div>
            </div>
        </div>
    );
};

export default Blogs;