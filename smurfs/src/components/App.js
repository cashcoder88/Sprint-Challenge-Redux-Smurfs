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
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      height: null,
      age: null
    }
  }

/*   
I had this before refactoring to state. 
It made more sense to use state so that I would 
only need one handleChanges function as opposed to three.
  const smurfObject = {
    name: "",
    height: null,
    age: null
  }
    handleName = e => {
    smurfObject.name = e.target.value;
  }

  handleHeight = e => {
    smurfObject.height = e.target.value
  }

  handleAge = e => {
    smurfObject.age = e.target.value
}
 addNewSmurf = () => {
    this.props.postSmurfs({name: smurfObject.name, age: smurfObject.age, height: smurfObject.height });
  }
  onChange={this.handleName}, handleAge, handleHeight
 */
  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  }


  componentDidMount() {
    this.props.getSmurfs();
  }

  addNewSmurf = () => {
    this.props.postSmurfs({name: this.state.name, age: this.state.age, height: this.state.height });
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
                onChange={this.handleChanges}
                placeholder="name"
                name="name"
                className="input"
              />
              <input
                onChange={this.handleChanges}
                placeholder="age"
                name="age"
                className="input"
              />
              <input
                onChange={this.handleChanges}
                placeholder="height"
                name="height"
                className="input"
              />
              <button onClick={this.addNewSmurf} type="submit" className='btn'>Add to the village</button>
            </form>
        </div>
        <div className="Smurf">
        {this.props.smurfs.map(smurf => {
           return (
             <div key={smurf.id}>
              <h1 className='name'>Name: {smurf.name}</h1>
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

