import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Toolbar, SimpleTable, GridListWidget } from './index'
import StudentVsMentor from './StudentVsMentor.jsx'
class DashboardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        studentEmail: '',
        studentPhone: '',
        studentFirst: '',
        studentLast: '',
      open: true,
      dataSource: [],
      width: window.innerWidth,
      height: window.innerHeight,
    };
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

  updateDimensions() {
      this.setState({width: window.innerWidth, height: window.innerHeight});
  }

  componentWillMount() {
      this.updateDimensions();
  }

  componentDidMount() {
      window.addEventListener("resizeDB", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
      window.removeEventListener("resizeDB", this.updateDimensions.bind(this));
  }

  render() {
    return (
      <div style={{height:`${this.state.height}px`, width:`${this.state.width-256}px`, paddingLeft:256, overflowY:'auto'}}>
          <StudentVsMentor/>
      </div>
    )
  }
}

const mapStoreToProps = (store) => {
  return {
    main: store.main
  }
}

const Dashboard = connect(mapStoreToProps)(DashboardComponent)
export default Dashboard
