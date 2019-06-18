import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SmurfWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
`;

const EditLink = styled(Link)`
  display: flex;
  justify-content: center;

  width: 50px;
  height: 30px;

  text-decoration: none;
  line-height: 30px;
`;

const DeleteButton = styled.button`
  width: 50px;
  height: 30px;
`;

const Smurf = props => {
  const onClickHandler = () => {
    props.deleteSmurf(props.id);
  };

  return (
    <SmurfWrapper className="Smurf">
      <Link to={`/smurf/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      {!props.viewOnly && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <DeleteButton onClick={onClickHandler}>Bye!</DeleteButton>
          <EditLink to={`/smurf-form/${props.id}`}>Edit</EditLink>
        </div>
      )}
    </SmurfWrapper>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
