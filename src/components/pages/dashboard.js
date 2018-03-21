import React, {Component} from 'react';
import axios from 'axios'
import {isEmpty, uniq, map, unionBy} from 'lodash'
import ChatMsg from './ChatMsg';

export function getData(url) {
  axios.get(url).then(resp => {
    console.log("resp--", resp);
  })
}

class Dashboard extends Component {
  state = {
    messages: [],
    users: []
  }

  componentDidMount = () => {
    const url = 'http://localhost:1337/messages';
    axios.get(url).then(resp => {
      console.log("RESP", resp);

      var uniqueMsgArr = unionBy(resp.data, (x) => x.username);
      const usernameArray = uniqueMsgArr.map((uniqueMsg) => uniqueMsg.username);

      console.log("USER", usernameArray);
      this.setState({messages: resp.data});
      this.setState({users: usernameArray});
    })
  }


  onSubmit = (e) => {
    if (e)
      e.preventDefault();
    const value = this.refs.conversationIn.value;
    console.log("MSG", value);
  }

  render() {
    const {messages, users} = this.state;

    console.log("username", users);
    return (<div className="container-fluid">
      <div className="flex-container">
        <div className="username">
          username {
            !isEmpty(users) && users.map((username, i) => {
              return <li key={i}>
                {username}
              </li>
            })

          }
        </div>
        <div className="textarea">

          Start Chatting with {this.state.value} as username
          <form onSubmit={this.onSubmit}>

            <input ref='conversationIn' name='conversationIn' type="text"/>

            <input type="submit" value="Send"/>
          </form>


        </div>

        <div className="chat">
          chat {<ChatMsg messages={messages}/>}

        </div>
      </div>

    </div>);

  }
}

export default Dashboard;
