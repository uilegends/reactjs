import { render } from '@testing-library/react';
import React from 'react';


function Users(prop) {

    return (
        <div>
            <h3>This is functional Component</h3>
            <p>Code is very sort</p>
            <ul>
                <li>
                    Code is Less in functional component
                </li>
                <li>
                    It is stateless.
                </li>
                <li>
                    Can be code all javascript code in functional component
                </li>
                <li>
                    Test cases are very flexible in functional component
                </li>
            </ul>
            <h2>{prop.data}</h2>
        </div>
    )
}

export default Users;
