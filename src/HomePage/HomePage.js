import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class HomePage extends Component {
    render() {
        return(
            <div>
                <h1>QuestionMark</h1>
                <p>Hello World! This is my home page.</p>
                <p>
                    <Link to="/about">Take a look about us here.</Link>
                </p>
                <p>
                    <Link to="/exam">An example of exam can be found here</Link>
                </p>
            </div>
        )
    }
}

export default HomePage;