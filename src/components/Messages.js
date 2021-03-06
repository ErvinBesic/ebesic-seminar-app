import { Component } from "react";
import React from "react";

class Messages extends Component {
  render() {
    const { messages } = this.props;
    return (
      <ul className="messages-list">
        {messages.map((m) => this.renderMessage(m))}
        <div
          style={{ clear: "both" }}
          ref={(endE) => {
            this.lastM = endE;
          }} /* izmjena */
        ></div>
      </ul>
    );
  }
  scrollToEnd = () => {
    this.lastM.scrollIntoView({ behavior: "smooth" });
  }; /* izmjena */

  componentDidUpdate() {
    this.scrollToEnd();
  } /* izmjena */

  renderMessage(message) {
    const { member, text } = message;
    const { currentMember } = this.props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe
      ? "messages-message currentMember"
      : "messages-message";
    return (
      <li className={className}>
        <div className="message-content">
          <div className="username">{member.clientData.username}</div>
          <div
            className="text"
            style={{ backgroundColor: member.clientData.color }}
          >
            {text}
          </div>
        </div>
      </li>
    );
  }
}

export default Messages;
