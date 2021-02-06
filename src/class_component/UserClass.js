import React from 'react';

class Userclass extends React.Component {
    constructor() {
        super();
        this.state = {
            user: 'Ghanshyam'
        }
    }
    render() {
        return (
            <div>
                <h3>
                    Hello {this.state.user}
                </h3>
            </div>
        )
    }
}

export default Userclass;