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
const smurfObject = {
  name: "",
  height: null,
  age: null
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  //Tried to figure out a way to handle each item in one function, didn't work, ideas?
  // handleInput = e => {
  //   if (name) {
  //     return smurfObject.name= e.target.value
  //   }
  //   if (height) {
  //     return smurfObject.height = e.target.value;
  //   }
  //   if (age) {
  //     return smurfObject.age = e.target.value;
  //   }
  // }

  
  handleName = e => {
    smurfObject.name = e.target.value;
  }

  handleHeight = e => {
    smurfObject.height = e.target.value
  }

  handleAge = e => {
    smurfObject.age = e.target.value
}

  componentDidMount() {
    this.props.getSmurfs();
  }

  addNewSmurf = () => {
    this.props.postSmurfs({name: smurfObject.name, age: smurfObject.age, height: smurfObject.height });
  }


  render() {
    if (this.props.fetchingSmurfs) {
      return <h1>CURRENTLY FETCHING YOUR DATA, SMURFS ARE COMING!</h1>
    }
    if (this.props.addingSmurf) {
      return <h1>CURRENTLY ADDING YOUR SMURF, THEY ARE COMING!</h1>
    }
    return (
      <div className="App">
        <div className="SmurfForm">
            <form onSubmit={this.addNewSmurf}>
              <input
                onChange={this.handleName}
                placeholder="name"
                name="name"
              />
              <input
                onChange={this.handleAge}
                placeholder="age"
                name="age"
              />
              <input
                onChange={this.handleHeight}
                placeholder="height"
                name="height"
              />
              <button onClick={this.addNewSmurf} type="submit">Add to the village</button>
            </form>
        </div>
        <div className="Smurf">
        {this.props.smurfs.map(smurf => {
           return (
             <div key={smurf.id}>
              <h1>Name: {smurf.name}</h1>
              <h3>Age: {smurf.age}</h3>
              <h3>Height: {smurf.height}</h3>
             </div>
           );
        })}
        </div>
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

