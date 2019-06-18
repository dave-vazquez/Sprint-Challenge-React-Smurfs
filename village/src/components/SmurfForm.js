import React, { Component } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    margin-bottom: 10px;
  }
`;

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.activeSmurf || {
      id: "",
      name: "",
      age: "",
      height: ""
    };

    this.localHost = "http://localhost:3333";
  }

  onSubmitHandler = event => {
    event.preventDefault();

    // formAction is either edit or add
    this.props.formAction({
      id: this.state.id,
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    });

    this.setState({
      name: "",
      age: "",
      height: ""
    });

    this.props.history.push("/");
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { activeSmurf } = this.props;
    return (
      <div className="SmurfForm">
        <h1>{activeSmurf ? "Update Smurf" : "Add Smurf"}</h1>
        <Form onSubmit={this.onSubmitHandler}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name || ""}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age || ""}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height || ""}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </Form>
      </div>
    );
  }
}

export default SmurfForm;
