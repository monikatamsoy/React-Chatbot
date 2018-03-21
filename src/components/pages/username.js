import React, {Component} from 'react';
// import AutoComplete from 'material-ui/AutoComplete';
import PropTypes from 'prop-types'

import {Link} from 'react-router-dom';

import axios from 'axios';

class Wireframe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if (this.state.value == '') {
      alert('Choose a username');
    } else {
      const username = this.state.value;
      const url = 'http://localhost:1337/messages'
      alert("Start chatting with '" + username + "' as username?");
      // window.location.href ='/dashboard';
      // this.context.router.push('/dashboard');
      var bodyFormData = new FormData();
      bodyFormData.set('username', username);
      bodyFormData.set('msg', 'Hi there');
      axios({
        method: 'post',
        url: url,
        data: bodyFormData,
        config: {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      }).then(function(response) {
        //handle success
        console.log(response);
      }).catch(function(response) {
        //handle error
        console.log(response);
      });
    }

  }

  render() {
    console.log("render", this.state);
    return (<div align="center">
      <form onSubmit={this.handleSubmit}>

        <label>

          Please choose your username:
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <Link to="/dashboard" input type="submit" value="submit">Start Chatting</Link>

      </form>
    </div>);
  }

}

export default Wireframe;
