/*
* Author: Solomon Antoine
* Date: 5/23/2018
* This app sends emails via Sendgrid
*/
import React, { Component } from 'react';
import './App.css';

import 'uikit/css/uikit.min.css';

class App extends Component {

  state = {
    email: {
      recipient: '',
      sender: '',
      subject: '',
      text: ''
    }
  }

  sendEmail = _ => {
    const { email } = this.state;
    fetch(`http://127.0.0.1:4000/send-email?recipient=${email.recipient}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`) //query string url
      .catch(err => console.error(err))
  }

  render() {
    const { email } = this.state;
    const spacer = {
      margin: 10
    }
    const textArea = {
      borderRadius: 4
    }
    return (
      <div className="App">
        <div>

          <div class="uk-child-width-1-2@m" uk-grid>
                <div class="uk-padding style">
                    <div class="uk-card uk-card-default">
                        <div class="uk-card-body">
                        <h2> Send Email </h2>
                        <label> Recipient </label>
                        <br />
                        <input class="uk-input" value={email.recipient}
                          onChange={e => this.setState({ email: { ...email, recipient: e.target.value } })} />
                        <div style={spacer} />
                        <label> Sender </label>
                        <br />
                        <input class="uk-input" value={email.sender}
                          onChange={e => this.setState({ email: { ...email, sender: e.target.value } })} />
                        <div style={spacer} />
                        <label> Subject </label>
                        <br />
                        <input class="uk-input" value={email.subject}
                          onChange={e => this.setState({ email: { ...email, subject: e.target.value } })} />
                        <div style={spacer} />
                        <label> Message </label>
                        <br />
                        <textarea class="uk-textarea" rows="10" value={email.text}
                          onChange={e => this.setState({ email: { ...email, text: e.target.value } })} />
                        <div style={spacer} />
                        <button class="uk-button" onClick={this.sendEmail}> Send Email </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
