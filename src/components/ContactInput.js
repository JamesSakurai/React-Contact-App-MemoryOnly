import React, { Component } from 'react'

import '../style/App.css';

export default class extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      name: '',
      number: '',
    };
  }
  
  addContact = () => {
      this.props.addContact(this.state);
      this.setState({
        name: '',
        number: '',
      });
  }
  
  render() {
    return(
      <div>
        <h3>Enter a New Contact</h3>
        <input className="inputs"
               type="text"
               placeHolder="Name"
               value={this.state.name}
               onChange={(e) => {this.setState({name: e.target.value});} }/>
        <input className="inputs"
               type="text"
               placeHolder="Phone Number"
               value={this.state.number}
               onChange={(e) => {this.setState({number: e.target.value});} }/>
        <button  onClick={() => this.addContact(this.state.value)}>Add</button>
      </div>
    );
  }
}