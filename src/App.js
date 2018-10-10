import React, { Component } from 'react';
import { Widget, addResponseMessage, } from 'react-chat-widget';
 
import 'react-chat-widget/lib/styles.css';
import {logo} from './logo.svg';
import './App.css';
class App extends Component {

  componentDidMount() {
    addResponseMessage("How can I help you!");
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
        profileAvatar={logo}
        title="Personal Assistant"
        subtitle="Ask me anything"
        />
      </div>
    );
  }
}
 
export default App;