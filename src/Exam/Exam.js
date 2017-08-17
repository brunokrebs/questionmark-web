import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Exam extends Component {
    render() {
        return (
            <div>
                <h1>Exam title</h1>
                <p>
                    Exam description. This should give the user some context about the exam.
                    Things like how many questions there are in the exam, what is the avarage score of the users,
                    how long does it take to finish, and so on.
                </p>
                <ol>
                    <li>Question 1</li>
                    <li>Question 2</li>
                    <li>Question 3</li>
                    <li>Question 4</li>
                    <li>Question 5</li>
                    <li>Question 6</li>
                    <li>Question 7</li>
                    <li>Question 8</li>
                </ol>
                <p>
                    <Link to="/">Wanna go home?</Link>
                </p>
            </div>
        );
    }
}

export default Exam;