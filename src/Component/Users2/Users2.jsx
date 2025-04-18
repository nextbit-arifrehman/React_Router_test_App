import React, { use } from 'react';

const Users2 = ({usersPromise}) => {

    const user2 =use(usersPromise);

    return (
        <div>
            This is users2 data loading
        </div>
    );
};

export default Users2;