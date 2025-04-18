import React from 'react';
import { Link, useNavigate } from 'react-router';
const Post = ({post}) => {
    const {id, title }=post;
    const navigate =useNavigate();
    const handlenavgivigate =() =>{

    //    navigate('/Mobile');
    //    below can be use too
       navigate(`/posts/${id}`);
    }

    return (
        <div style={{border:"2px solid gold"}}>
            <h2 className='font-mono'>{title}</h2>
            <Link to={`/posts/${id}`}>
            <button>Show More</button>
            </Link>
            <button onClick={handlenavgivigate} >Detail Id</button>
        </div>
    );
};

export default Post;