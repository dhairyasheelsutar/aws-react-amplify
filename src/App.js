import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      senderId: '',
      friendId: '',
      showData: false
    }
  }


  handleChangeUser = (event) => {
    this.setState({senderId: event.target.value});
  }

  handleChangeFriendId = (event) => {
    this.setState({friendId: event.target.value});
  }

  fetchData = () => {
    
    this.setState({
      showData: true
    });
  }

  sendFriendReq = () => {
    console.log(this.state);
  }


  render() {
    return (
      <div className="App">
        
        <div id="selectUser">
          <h4>Select User</h4>
          <input type="text" onChange={this.handleChangeUser} /> 
          <button onClick={this.fetchData}>Submit</button>
        </div>
        <br />
        <br />
        <br />
  
        { 
          
          this.state.showData ? 
          
          <div>
            <div id="selectUserToSendReq">
            <h4>Select Friend want to add as friend</h4>
            <input type="text" onChange={this.handleChangeFriendId} /> 
            <button onClick={this.sendFriendReq}>Submit</button>
          </div>
    
          
          <br />
          <br />
          <br />
    
    
          <div id="seePendingInv">
            <h4>Invites</h4>
            <p>mewtwo.X  -----------------------------   <button>Add</button> <button>Cancel</button></p>
            
          </div>
    
          
          <br />
          <br />
          <br />
    
          <div id="friends">
            <h4>Friends</h4>
            <p>mewtwo.X  -----------------------------   <button>Remove</button></p>
            
          </div>
    
    
          <br />
          <br />
          <br />
    
          <div id="sentRequests">
            <h4>Sent Requests</h4>
            <p>mewtwo.X  -----------------------------   <button>Cancel</button></p>
            
          </div> 
          </div> 
          
          :

          <div></div>
        }
  
      </div>
    );
  }
}

export default App;
