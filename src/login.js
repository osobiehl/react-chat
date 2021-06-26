import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import  './assets/css/index.css'
import './assets/css/room.css'
import './assets/css/signup.css'
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
    sendLoginRequest();
  }



    
    render(){
    return(
  
            <div>
              {/* Required meta tags */}
              <meta charSet="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <title>Hello, world!</title>
              <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand" href="#">Kino Club</a>
                <ul className="nav navbar-nav m-auto">
                  <li>
                    <h2>Sign in</h2>
                  </li>
                </ul>
              </nav>
              <div className="container__child signup__form">
                <form action="#">
                  <div className="form-group">
                    <label htmlFor="Phone-number">Clubhouse Username</label>
                    <input className="form-control" type="text" name="Phone-number" id="Phone-number" placeholder required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="form-control" type="password" name="password" id="password" required />
                  </div>
                  <div className="m-t-lg">
                    <ul className="list-inline">
                      <li>
                        <input className="btn btn--form clubhouse-btn" type="submit" defaultValue="Sign in" />
                      </li>
                      <li>
                        <a className="signup__link" href="#">Sign up</a>
                      </li>
                    </ul>
                  </div>
                </form>  
              </div>
            </div>
          );
  }
}
