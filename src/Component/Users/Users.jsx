import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h2>Gate of Hell will open soon</h2>
        </div>
    );
};

export default Users;