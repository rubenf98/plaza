import React from 'react'
import { Link } from "react-router-dom";    

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <ul>
                    <li>
                        <Link to="/example">Example</Link>
                    </li>
                </ul>
            </div>

        );
    }
}

export default Home