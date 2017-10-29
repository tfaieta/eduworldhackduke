import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'


export default class StudentVsMentor extends Component {

    constructor(props) {
        super(props);
        this.StudentClick = this.StudentClick.bind(this);
        this.MentorClick = this.MentorClick.bind(this);
    }


    StudentClick(){
        <Redirect to="/Dashboard/student" />
    }

    MentorClick(){
        <Redirect to="/somewhere/else"/>
    }


    render() {


        return (
            <div>
                <h1 className="todoapp">Which One Are You?</h1>
                <Link to="/Dashboard/student">
                    <button className="button" >Student</button>
                </Link>
                <button className="button" onClick = { this.MentorClick }>Mentor</button>
            </div>
        );
    }
}


