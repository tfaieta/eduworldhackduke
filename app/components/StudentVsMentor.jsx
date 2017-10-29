import React, { Component } from 'react';
import { Route, Redirect } from 'react-router'


export default class StudentVsMentor extends Component {

    constructor(props) {
        super(props);
        this.StudentClick = this.StudentClick.bind(this);
        this.MentorClick = this.MentorClick.bind(this);
    }


    StudentClick(){
        this.context.router.push('app/components/Status.jsx')
    }

    MentorClick(){
        <Redirect to="/somewhere/else"/>
    }


    render() {


        return (
            <div>
                <button onClick = { this.StudentClick }>Student</button>


                <button onClick = { this.MentorClick }>Mentor</button>
            </div>

        );
    }
}