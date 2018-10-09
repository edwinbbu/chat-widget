import React, { Component } from 'react';
import { Widget, addResponseMessage, } from 'react-chat-widget';
 
import 'react-chat-widget/lib/styles.css';
import './logo.svg';

class App extends Component {

  componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage(newMessage);
  }

  render() {
    return (
      <div className="App">
        <Widget 
        handleNewUserMessage={this.handleNewUserMessage}
        title="My new awesome title"
        subtitle="And my cool subtitle"
        />
      </div>
    );
  }
}
 
export default App;