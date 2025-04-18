import React from 'react';
import User2 from '../Users2/Users2';
import { useLoaderData } from 'react-router';
import Childuser from './childuser';

const Users = () => {
    const users = useLoaderData();
   
    return (
        <div>
            <h2> User:Gate of Hell will open soon</h2>
            <div>
                {
                    users.map(user => <Childuser key={user.id} user ={user}></Childuser>)
                }
            </div>
        </div>
    );
};

export default Users;