import React from 'react';
import './Singleblog.css'
import bookmarkimg from '../../assets/bookmark.svg'
const Singleblog = (props) => {
    const { id, authorname, title, cover, img, publishdate, readtime, hasha, hashb } = props.blog;
    const handleTimeSpent = props.handleTimeSpent;
    const handleBookmark = props.handleBookmark;
    return (
        <div className='singleblog-container'>
            <img className='cover-img' src={cover} alt="" />
            <div className='singleblog-middle'>
                <div className='author-container'>
                    <img className='author-img' src={img} alt="" />
                    <div>
                        <h3 className='author-name'>{authorname}</h3>
                        <p className='publish-date'>{publishdate}</p>
                    </div>
                </div>
                <div className='read-bm-container'>
                    <p>{readtime} min read <button className='bookmark-btn' onClick={()=>handleBookmark(props.blog)}><img src={bookmarkimg} alt="" /></button></p>
                </div>
            </div>
            <div className='singleblog-last'>
                <h1 className='blog-title'>{title}</h1>
                <p><span>{hasha}</span>  <span>{hashb}</span></p>
                <button onClick={()=>handleTimeSpent(readtime)} className='mark-btn'>Mark as read</button>
                {id<4?<Border></Border>:''}
            </div>
        </div>
    );
};
function Border(){
    return(
        <hr style={{marginBottom:"20px"}} />
    )
}
export default Singleblog;