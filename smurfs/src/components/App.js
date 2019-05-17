import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { getSmurfs, postSmurfs } from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    if (this.props.fetchingSmurfs) {
      <h1>CURRENTLY FETCHING YOUR DATA, PATIENCE IS KEY</h1>
    }
    return (
      <div className="App">
        {this.props.smurfs.map(smurf => {
           return (
             <div>
              <h1>Name: {smurf.name}</h1>
              <h3>Age: {smurf.age}</h3>
              <h3>Height: {smurf.height}</h3>
             </div>
           );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    error: state.error
  }
}


export default connect(mapStateToProps, {getSmurfs, postSmurfs})(App);

