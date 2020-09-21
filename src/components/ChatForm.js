import React, { Component } from "react";
import Messages from "./Messages";
import Input from "./Input";
import Member from "./Member";
import { randomName } from "./helpers/randomName";
import { randomColor } from "./helpers/randomColor";

export default class ChatForm extends Component {
  state = {
    messages: [],
    member: {
      username: randomName(),
      color: randomColor(),
    },
    members: [],
    visibleMembers() {
      return this.members.length;
    },
  };

  componentDidMount() {
    this.drone = new window.Scaledrone("eqvYGScTOj5xa0MY", {
      data: this.state.member,
    });
    const room = this.drone.subscribe("observable-room");

    this.drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      const member = { ...this.state.member };
      member.id = this.drone.clientId;
      this.setState({ member });
    });

    room.on("message", (message) => {
      const { data, id, member } = message;
      const messages = this.state.messages;
      messages.push({ id, member, text: data });
      this.setState({ messages });
    });
    room.on("members", (members) => {
      this.setState({ members });
    });
  }

  render() {
    return (
      <div className="mainLayout">
        <div className="header1">
          <h1>Chat aplikacija</h1>
        </div>
        <hr />
        <div className="header2">
          <h1>Chat room dashboard</h1>
          <div className="room1">
            <p>Moj trenutni avatar:</p>
            <p style={{ backgroundColor: this.state.member.color }}>
              {" "}
              {/* izmjena */}
              {this.state.member.username}
            </p>
          </div>
          <div className="room2">
            <p>Broj sudionika: </p>
            <p>{this.state.visibleMembers()}</p>
          </div>
        </div>

        <hr />
        <br />

        <div className="members-list">
          <p>Sudionici u sobi: </p>
          <br />
          <div>
            <li>
              {this.state.members.map((member) => {
                return (
                  <Member
                    key={member.id}
                    name={member.clientData.username}
                    color={member.clientData.color}
                  />
                );
              })}
            </li>
          </div>
        </div>
        <hr />

        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
        />

        <br />
        <hr />
        <br />
        <div>
          <Input onSendMessage={this.onSendMessage} />
        </div>
      </div>
    );
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: "observable-room",
      message,
    });
  };
}
