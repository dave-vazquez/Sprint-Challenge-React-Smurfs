import React, { Component } from "react";
import styled from "styled-components";
import Smurf from "./Smurf";

const SmurfsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    padding: 0;
  }
`;

class Smurfs extends Component {
  render() {
    const { deleteSmurf } = this.props;
    return (
      <SmurfsContainer>
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={deleteSmurf}
              />
            );
          })}
        </ul>
      </SmurfsContainer>
    );
  }
}

Smurfs.defaultProps = {
  smurfs: []
};

export default Smurfs;
