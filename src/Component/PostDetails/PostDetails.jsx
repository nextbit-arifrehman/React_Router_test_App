import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
    const BackNavigate = useNavigate();

    // const backHandle= ()=>{
        
    // //    BackNavigate(-1)
    // }


    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={()=>BackNavigate (-1)}>Back</button>
        </div>
    );
};

export default PostDetails;