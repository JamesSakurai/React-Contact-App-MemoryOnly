import React, {Component} from 'react'

export default class extends Component {

  removeContact(id) {
  this.props.removeContact(id);
}
  
  render() {
    return(
      <div className="contactWrapper">
        <div className="contact">
        <button className="removeContact" onClick={(e) => this.removeContact(this.props.id)}>Delete</button>
        <div>{this.props.contact.name} </div>
        <div>: {this.props.contact.number}</div>
        </div>
        <br/>
      </div>
    );
  }
}