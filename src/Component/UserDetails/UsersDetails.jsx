import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UsersDetails = () => {
    const user= useLoaderData();
   
    const {website ,name}=user;

    const {userId}=useParams();
    console.log(userId);
    // let params = useParams();
    // console.log(params.userId);
    return (
        <div>
            <h2>User Details Show</h2>
            <h3>Name:{name}</h3>
            <p>Website:{website}</p>
        </div>
    );
};

export default UsersDetails;