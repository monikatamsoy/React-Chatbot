import React, {Component} from 'react';

class ChatMsg extends Component {
  render() {
    const {
      messages = []
    } = this.props;

    return <div>
      {
        messages.map((message, i) => {
          return <li key={i}>
            {message.username}
            - {message.msg}
          </li>
        })
      }
    </div>

    }
}
export default ChatMsg
