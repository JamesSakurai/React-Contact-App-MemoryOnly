import React, { Component } from 'react';
import Header from './Header'
import ContactInput from './ContactInput'
import ContactItem from './ContactItem'


import '../style/App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      contacts: [
        {id: 0, name: "James Sakurai", number: "801-979-7570"},
        {id: 1, name: "Example Contact", number: "123-456-7890"},
      ],
      nextId: 2
    };
    
    this.addContact = this.addContact.bind(this);
    this.removeContact = this.removeContact.bind(this);
  }
  
  addContact(contact) {
    let contacts = this.state.contacts;
    contacts.push({id: this.state.nextId, name: contact.name, number: contact.number});
    this.setState({
      contacts: contacts,
      nextId: ++this.setState.nextId
    });
  }
  
  removeContact(id) {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id)
    });
  }
  
  render() {
    return (
      <div className="App">
        <div className="contacts-wrapper">
          <Header/>
          <ContactInput contactText="" addContact={this.addContact}/>
          <ul>
            {
              this.state.contacts.map((contact) => {
                return<ContactItem contact={contact} key={contact.id} id={contact.id} removeContact={this.removeContact}/>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
