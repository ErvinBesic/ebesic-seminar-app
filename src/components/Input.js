import { Component } from "react";
import React from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    /* izmjena */
    this.state = {
      text: "",
    };
    this.textInput = React.createRef();
    this.focus = this.focus.bind(this);
  }

  focus() {
    /* izmjena */
    this.textInput.current.focus();
  }

  onChange(e) {
    this.setState({ text: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ text: "" });
    this.props.onSendMessage(this.state.text);
  }

  render() {
    return (
      <div className="input">
        <form onSubmit={(e) => this.onSubmit(e)}>
          <input
            onChange={(e) => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Upiši poruku i pošalji"
            autoFocus={true}
            ref={this.textInput} /* izmjena */
          />
          <button class="btn success" onClick={this.focus} /* izmjena */>
            Pošalji
          </button>
        </form>
      </div>
    );
  }
}

export default Input;
