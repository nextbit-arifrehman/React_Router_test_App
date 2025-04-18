import React, { Suspense, useState } from 'react';
import { data, Link, Navigate, useLocation } from 'react-router';
import User2Detail from '../User2Detail/User2Detail';

const Childuser = ({user}) => {
    const [showInfo ,setshowInfo]=useState(false);
    const [visitHome ,SetvisitHome] =useState(false);
    const location =useLocation();
    console.log(location);

    const {id,name,email ,phone } =user;

    const userPromises =fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());

    const userStyle ={
        border:"2px solid gold",
        borderRadius: "20px",
        padding:"20px",
        margin: "10px"
    }
    if(visitHome){
        return <Navigate to='/'></Navigate>
    }
    return (
        <div style={userStyle}>
            <h2 className='font-black'>{name}</h2>
            <p>Email:{email}</p>
            <p><small>Phone:{phone}</small></p>
            <Link to={`/users/${id}`}>Show Details</Link>
            <button onClick={()=> setshowInfo(!showInfo)}>{showInfo? "Hide": "Show"}Info</button>
            {
                showInfo && <Suspense fallback={<span className="loading loading-spinner text-warning"></span>}>
                    <User2Detail userPromises={userPromises}></User2Detail>
                </Suspense>
            }
            <button onClick={()=> SetvisitHome(true)}>VisitHome</button>
        </div>
    );
};

export default Childuser;