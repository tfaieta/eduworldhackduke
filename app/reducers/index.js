import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAKca-ISBJ8vaPz10l4rkmejkuQA4F7Dl4",
    authDomain: "hackduke-e3ecb.firebaseapp.com",
    databaseURL: "https://hackduke-e3ecb.firebaseio.com",
    projectId: "hackduke-e3ecb",
    storageBucket: "hackduke-e3ecb.appspot.com",
    messagingSenderId: "919797064749"
};
    firebase.initializeApp(config);

module.exports = {
  main: (state={
    addr: null,
    balance: null,
    name: null,
    uport: {},
    uportInstance: {},
    width: 50,
    height: 50,
    margin: 10,
    showTooltip: true,
    hideTooltip: false,
    tooltipData: [],
    tooltipTop: true,
    tooltipLeft: true,
    events: []
  }, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          addr: action.payload.addr
        }
      case 'SET_UPORT':
        return {
          ...state,
          addr: action.payload.addr,
          name: action.payload.name,
          uport: action.payload.uport,
          uportInstance: action.payload.uportInstance
        }
      case 'SET_BALANCE':
        return {
          ...state,
          addr: action.payload.addr,
          balance: action.payload.balance
        }
      default:
        return state
    }
  },
  ipfs: (state={
    log: {},
  }, action) => {
    switch (action.type) {
      case 'UPDATE_LOG':
        return {
          ...state,
          log: action.payload.log
        }
      default:
        return state
    }
  },
}
