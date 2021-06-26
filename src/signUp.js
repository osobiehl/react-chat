import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import  './assets/css/index.css'
import './assets/css/room.css'
import './assets/css/signup.css'
import axios from 'axios'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
let link = "https://clubtext.chat"

let endpoint = '/api/verify_number/'

const jose_num = '+491625145943'
let my_number='+37069848486'
my_number = jose_num;


async function sendSecondRequest(phone_number, sms_code, password){
  let query_string =   link + '/api/account?' + ( `phone_number=${encodeURIComponent(phone_number)}&sms_code=${encodeURIComponent(sms_code)}&new_password=${encodeURIComponent(password)}` )
  console.log(query_string)
  try{
    
    let response  = await axios.post(query_string)
    console.log(response.data)
  }
  catch(error){
    console.log(error.response.data)
  }

} 

async function sendRequest(e){
  alert(e)
  e.preventDefault();

  console.log("CALLING ONCE")
  try{


  let response = await axios.post(link + endpoint + my_number, {})
  console.log("GOT RESPONSE!")

  console.log(response.data)

  var sms_code = window.prompt("Enter sms");
  var password = window.prompt("enter password")
  await sendSecondRequest(my_number, sms_code, password )
  
}
  catch(err){
    console.log(err.response.data)
  }
}




export default class SignUp extends React.Component{
  constructor(props){
    super(props)
  }
  
  
  render(){
    return (
      <div>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Normalize css*/} 
        <link href="./normalize.css" rel="stylesheet" />
        {/* Bootstrap CSS */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossOrigin="anonymous" />
        <link href="./clubhouse.css" rel="stylesheet" />
        <link href="./signup.css" rel="stylesheet" />
        <title>Hello, world!</title>
        <div className="container__child signup__form">
          <form onSubmit={ sendRequest }>
            <div className="form-group">
              <label htmlFor="Phone-number">Phone number</label>
              <input className="form-control" type="text" name="Phone-number" id="Phone-number" placeholder="eg. 1625148943" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input className="form-control" type="password" name="password" id="password" placeholder="********" required />
            </div>
            <div className="form-group">
              <label htmlFor="passwordRepeat">Repeat Password</label>
              <input className="form-control" type="password" name="passwordRepeat" id="passwordRepeat" placeholder="********" required />
            </div>
            <div className="m-t-lg">
              <ul className="list-inline">
                <li>
                  <input className="btn btn--form clubhouse-btn" type="submit"  defaultValue="Register" />
                </li>
                <li>
                  <a className="signup__link" href="#">I am already a member</a>
                </li>
              </ul>
            </div>
          </form>  
        </div>
        {/* Optional JavaScript; choose one of the two! */}
        {/* Option 1: Bootstrap Bundle with Popper */}
        {/* Option 2: Separate Popper and Bootstrap JS */}
        {/*
    
    
    */}
      </div>
  );
  }
}


