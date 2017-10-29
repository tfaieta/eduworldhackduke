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

    render() {

        return (
            <div id ='Layout'>
                <div>
                    <form>
                        <fieldset>
                            <legend>Student Information</legend>
                            <input type='email' placeholder='morty@pickles.com' value={this.state.studentEmail} onChange={this.handleEmailChange}/>
                            <div></div>
                            <input type='text' placeholder='Phone Number'value={this.state.studentPhone} onChange={this.handlePhoneChange}/>
                            <div></div>
                            <input type='text' placeholder='First Name' value={this.state.studentFirst} onChange={this.handleFirstChange}/>
                            <div></div>
                            <input type='text' placeholder='Last Name'value={this.state.studentLast} onChange={this.handleLastChange}/>
                            <button type='submit' className = 'pure-button pure-button-primary'>Submit</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}