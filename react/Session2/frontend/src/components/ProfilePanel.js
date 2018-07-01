import React, { Component } from 'react';
import axios from '../axios';
import LoginModal from './LoginModal';
class ProfilePanel extends Component {
  state = {
    username: null,
    LoginModalOpen: false
  };

  login = () => {
      axios.post("/api/auth", {
        username: "admin1",
        password: "admin1"
      })
      .then(response => {
        this.setState({
          username: response.data.username,
          id: response.data.id
        })

      })
      .catch(err => {
        console.log(err);
      })
    this.setState({
      LoginModalOpen: true
    });
  }

  componentWillMount() {
    axios.get("api/auth").then(response => {
      this.setState({
        username: response.data.username,
        id: response.data.id
      })
    })
      .catch(error => console.log(error))
  }


  render() {
    return (
      <div className="col-3 profile_panel text-right">
        <LoginModal isOpen={this.state.LoginModalOpen} toggle={() => {this.setState({LoginModalOpen: false})}}/>
        {this.renderContent()}
      </div>
    );
  }

  renderContent() {
    if (!this.state.username) {
      return <button className="btn btn-primary btn-block" onClick={this.login}>Login</button>;
    } else {
      return <div >{this.state.username}</div>
    }
  }
}

export default ProfilePanel;