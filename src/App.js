import Users from "./Components/Card";
import './App.css';

import React, { Component } from 'react'
	
class App extends Component {
  constructor(props){
	super(props)
		
	this.state = {users_data :[],
                loading : true                
  }
  

	this.updateState = this.updateState.bind(this)
  }
    
  updateState(){
      const link="https://reqres.in/api/users?page=1";
      fetch(link)
      .then(response => response.json())
      .then((users) => {
        
        this.setState({users_data :users.data,
                        loading: false
        })
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error)
      })
  }
    
  render(){
    return (<>
   
      <nav>
          <div className="navbar_container">
            <div className="navbar_items">
            <h2>LetsGrowMore</h2>
            <button onClick={this.updateState}>Get Users</button>
            </div>
          </div>
        </nav>
        <div className="box">
         <Users loading={this.state.loading} users={this.state.users_data}/>
         </div>
      <footer>
        <div className="footer">
          <p>Made by Yadhu Krishna P P | Copyright &copy; 2021</p>
        </div>
      </footer>
    </>
    )
  }
}
	
export default App;