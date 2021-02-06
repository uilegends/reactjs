import React from 'react';


function Users(prop) {

    function testFun() {
        alert('Normal function called')
    }
    const testArr = () => {
        alert('Arrow function called')
    }
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
            <h2 >{prop.data}</h2>
            <h3 onClick={testFun}>Click Normal Function</h3>
            <h4 onClick={testArr}>Click on Arrow function (ES6 based)</h4>
        </div>
    )
}

export default Users;
