import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppDrawer, Toolbar , Dashboard, SimpleTable, GridListWidget, Login, Home, Status, Charts, Settings } from './index'


class AnalyticsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  updateDimensions() {
      this.setState({width: window.innerWidth, height: window.innerHeight});
  }

  componentWillMount() {
      this.updateDimensions();
  }

  componentDidMount() {
      window.addEventListener("resizeAnalytics", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
      window.removeEventListener("resizeAnalytics", this.updateDimensions);
  }

  render() {
    return (
      <div className="makecall">
        <Toolbar />
          <a href={"https://hangouts.google.com/call/kja7WAxSRjHgKVWNVgV-AAEE"}>Make a Call</a>
          <AppDrawer />
      </div>
    )
  }
}

const mapStoreToProps = (store) => {
  return {
    main: store.main
  }
}

const Analytics = connect(mapStoreToProps)(AnalyticsComponent)
export default Analytics
