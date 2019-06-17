import React from "react";
import styled from "styled-components";

const SmurfWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Smurf = props => {
  return (
    <SmurfWrapper className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </SmurfWrapper>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
