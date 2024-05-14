import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const User = () => {
    // const data = useParams();
    const user = useLoaderData();

    return (
        <div>
            <h1>{user.name}</h1>
            {user.email}
        </div>
    );
}

export default User;
