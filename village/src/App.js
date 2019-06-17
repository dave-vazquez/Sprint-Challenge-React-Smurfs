import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import Smurf from "./components/Smurf";
import NavBar from "./components/NavBar";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      getFailed: false
    };

    this.localHost = "http://localhost:3333";
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount = () => {
    axios
      .get(`${this.localHost}/smurfs`)
      .then(res => {
        this.setState({
          smurfs: res.data,
          getFailed: false
        });
      })
      .catch(err => {
        this.setState({
          getFailed: true
        });
      });
  };

  addSmurf = smurf => {
    axios
      .post(`${this.localHost}/smurfs`, smurf)
      .then(res => {
        console.log(res.data);
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => {
        console.log("No.");
      });
  };

  editSmurf = smurf => {
    console.log(smurf);
    axios
      .put(`${this.localHost}/smurfs/${smurf.id}`, smurf)
      .then(res => {
        console.log(res.data);
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => {
        console.log("No.");
      });
  };

  deleteSmurf = id => {
    axios
      .delete(`${this.localHost}/smurfs/${id}`)
      .then(res => {
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => {
        console.log("No.");
      });
  };

  render() {
    const { smurfs, getFailed } = this.state;
    return (
      <AppContainer className="App">
        <NavBar />
        {getFailed ? (
          <h1>Error getting Smurfs...</h1>
        ) : (
          <Route
            exact
            path="/"
            render={props => (
              <Smurfs
                {...props}
                smurfs={smurfs}
                deleteSmurf={this.deleteSmurf}
              />
            )}
          />
        )}
        <Route
          exact
          path="/smurf-form"
          render={props => <SmurfForm {...props} formAction={this.addSmurf} />}
        />
        <Route
          path="/smurf-form/:id"
          render={props => {
            let activeSmurf = smurfs.find(
              smurf => `${smurf.id}` === props.match.params.id
            );
            return (
              <SmurfForm
                {...props}
                formAction={this.editSmurf}
                activeSmurf={activeSmurf}
              />
            );
          }}
        />
        <Route
          path="/smurf/:id"
          render={props => {
            let activeSmurf = smurfs.find(
              smurf => `${smurf.id}` === props.match.params.id
            );
            return <Smurf {...props} {...activeSmurf} viewOnly />;
          }}
        />
      </AppContainer>
    );
  }
}

export default App;
