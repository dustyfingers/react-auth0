import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';

const Profile = () => {

    const { user, isAuthenticated } = useAuth0();

    return (

        <div>
            
            {isAuthenticated && (
                <div>
                    <h2>{user.name }</h2>
                    <img src={user.picture} alt={user.name} />
                    <p>{user.email}</p>
                    <JSONPretty data={user} />
                </div>
            )}

            {!isAuthenticated && (
                <p>No user authenticated.</p>
            )}

        </div>

    );

}

export default Profile;