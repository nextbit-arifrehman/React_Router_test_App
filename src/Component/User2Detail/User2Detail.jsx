import React, { use } from 'react';

const User2Detail = ({userPromises}) => {
    // const user= use(userPromises);
    const {name,username}= use(userPromises);

//   console.log(user);

    return (

        <div>
            <p><small>User Name: {username}</small></p>
            <p>{name}</p>
        </div>
    );
};

export default User2Detail;