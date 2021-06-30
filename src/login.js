import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import  './assets/css/index.css'
import './assets/css/room.css'
import './assets/css/signup.css'
import Dashboard from'./Dashboard.js'
import axios from 'axios'
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//let link = "https://clubtext.chat"

let endpoint = '/api/verify_number/{phone_number}:'
async function sendLoginRequest(){
  let link = "https://clubtext.chat/api/authenticate/" 
  let password='TestPass(1)'
  let userId="jzaliaduonis"
  console.log("CALLING ONCE")
  try{
    let query_string = `${link}${userId}?password=${encodeURIComponent(password)}`
    let response = await axios.post(query_string, {'test': 'mwah'})
    console.log(response.data)
  }
  catch(err){
    console.log(err)


    if (err.response)
    console.log(err.response.data)
  }
}



export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      failure: '',

    };
    ['handleChange', 'submit'].forEach(method => {this[method] = this[method].bind(this)}); 
  }
  componentWillMount(){
    
  }
  handleChange(e){
    e.preventDefault();
    this.setState((prevstate) => ({...prevstate, [e.target.id]:  e.target.value}  )  )
    console.log(this.state)
  }
  async submit(e){
    console.log('submitting')
    e.preventDefault();
    let link = "https://clubtext.chat/api/authenticate/" 
    let password= this.state.password;
    let userId= this.state.username;
    console.log("CALLING ONCE")
    try{
      let query_string = `${link}${userId}?password=${encodeURIComponent(password)}`
      let response = await axios.post(query_string)
      console.log(response.data)
    }
    catch(err){
      console.log(err)
      this.setState((prevstate) => ({...prevstate, failure:  'error: incorrect username or password, please try again'}  )  )
      if (err.response)
      console.log(err.response.data)
    }

  }



    
    render(){
    return(
  
            <div>
              {/* Required meta tags */}
              <meta charSet="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <title>Log in</title>
              <Dashboard pageName={"Dashboard"} username={"person mcPerson"} followers={111}></Dashboard>
              <div className="container__child signup__form">
                <form action="#" onSubmit={this.submit}>
                  <div className="form-group">
                    <label htmlFor="Phone-number">Clubhouse Username</label>
                    <input className="form-control" type="text" name="Phone-number" id="username" onChange={this.handleChange} placeholder="" required={true} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="form-control" type="password" name="password" id="password" onChange={this.handleChange}  required={true} />
                  </div>
                  <div className="m-t-lg">
                    <ul className="list-inline">
                      <li>
                        <input className="btn btn--form clubhouse-btn signup-btn" style={{color: 'black'}} type="submit" defaultValue="Sign in" />
                      </li>
                      <li>
                        <a className="signup_link" href="#">Sign up</a>
                      </li>
                    </ul>
                  </div>
                  <div className="login-error">
                    {this.state.failure}
                  </div>
                </form>  
              </div>
            </div>
          );
  }
}
