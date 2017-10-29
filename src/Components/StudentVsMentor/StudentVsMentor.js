import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import { Route, Redirect } from 'react-router'


export default class StudentVsMentor extends Component {

    constructor(props) {
        super(props);
        this.StudentClick = this.StudentClick.bind(this);
        this.MentorClick = this.MentorClick.bind(this);
    }


StudentClick(){
        <Redirect to="src/Components/StudentForm/StudentForm.js"/>
    }

    MentorClick(){
        <Redirect to="/somewhere/else"/>
    }


    render() {


        return (
            <div>
            <button onClick={ this.StudentClick }>Student</button>


            <button onClick={ this.MentorClick }>Mentor</button>
            </div>

        );
    }
}
