import React, { Component } from 'react';

export default class StudentForm extends Component
{
    constructor(props) {
        super(props);
        this.state =
            {
                studentEmail: '',
                studentPhone: '',
                studentFirst: '',
                studentLast: ''
            }
    }

    handleEmailChange = event => {
        this.setState({ studentEmail: event.target.value });
    }
    handlePhoneChange = event => {
        this.setState({ studentPhone: event.target.value });
    }
    handleFirstChange = event => {
        this.setState({ studentFirst: event.target.value });
    }
    handleLastChange = event => {
        this.setState({ studentLast: event.target.value });
    }

    render() {

        return (
            <div id ='Layout'>
                <div className='pure-g'>
                    <form className='pure-form'>
                        <fieldset>
                            <legend>Student Information</legend>
                            <input type='email' placeholder='morty@pickles.com' value={this.state.studentEmail} onChange={this.handleEmailChange}/>
                            <input type='text' placeholder='Phone Number'value={this.state.studentPhone} onChange={this.handlePhoneChange}/>
                            <input type='text' placeholder='First Name' value={this.state.studentFirst} onChange={this.handleFirstChange}/>
                            <input type='text' placeholder='Last Name'value={this.state.studentLast} onChange={this.handleLastChange}/>
                            <button type='submit' className = 'pure-button pure-button-primary'>Submit</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}