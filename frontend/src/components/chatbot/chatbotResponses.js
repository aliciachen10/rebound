import React, { Component } from "react";
import axios from "axios";


class chatbotResponses extends Component {
  constructor(props) {
    super(props);
    const { steps } = this.props;
    const { submit, firstname, lastname, email } = steps;

    this.state =  { submit, firstname, lastname, email }; 
    // console.log (submit, firstname, lastname, email)
  }

  render() {
    return (
      <div>Thank you! Your data was submitted successfully!</div>
      );
    }
  };


  export default chatbotResponses;