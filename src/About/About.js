import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <div>
                <h1>About QuestionMark</h1>
                <p>What is this all about? I don't know yet.</p>
                <p>
                    <Link to="/">Let's go back home.</Link>
                </p>
            </div>
        )
    }
}

export default About;