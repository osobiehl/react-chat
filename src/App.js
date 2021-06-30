import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import  './assets/css/index.css'
import './assets/css/room.css'
import './assets/css/signup.css'
import Dashboard from './Dashboard.js'
import Login from './login.js'
import SignUp from './signUp.js'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

let sample_img = "//gravatar.com/avatar/00034587632094500000000000000000?d=retro"

function MessageImage(props){
  return !props.image ? (<div></div>) : (
    <div className="msg-img">
      <img src={props.image} alt="uploaded image"></img>
      </div>
  )

}

function RemoteTextMessage(props){
  return (
    <article className="msg-container msg-remote" id="msg-0">
    <div className="msg-box">
      <div className="flr">
      <span className="timestamp"><span className="username">{props.userName}</span>•<span className="posttime">{props.timeStamp}</span></span>
       <MessageImage image={props.image}></MessageImage>
        <div className="messages">
          <p className="msg" id="msg-0">
            {props.message}
          </p>
        </div>
      </div>
    </div>
  </article>
  )
}
function OwnTextMessage(props){
  return (
    <article className="msg-container msg-self" id="msg-0">
    <div className="msg-box">
      <div className="flr">
      <MessageImage image={props.image}></MessageImage>
      <span className="timestamp"><span className="username"></span><span className="posttime">{props.timeStamp}</span></span>
        <div className="messages">
          <p className="msg" id="msg-0">
            {props.message}
          </p>
        </div>
      </div>
    </div>
  </article>
  )
}
function AdminMessage(props){
  return (
    <article className="msg-container msg-remote msg-admin" id="msg-0">
    <div className="msg-box">
      <div className="flr">
      <MessageImage image={props.image}></MessageImage>
      <span className="timestamp"><span className="username admin">{props.userName}</span><span className="posttime">{props.timeStamp}</span></span>
        <div className="messages">
          <p className="msg" id="msg-0">
            {props.message}
          </p>
        </div>
      </div>
    </div>
  </article>
  )
}
function OwnAdminMessage(props){
  return (
    <article className="msg-container msg-self msg-admin" id="msg-0">
    <div className="msg-box">
      <div className="flr">
      <MessageImage image={props.image}></MessageImage>
      <span className="timestamp"><span className="username admin"></span><span className="posttime">{props.timeStamp}</span></span>
        <div className="messages">
          <p className="msg" id="msg-0">
            {props.message}
          </p>
        </div>
      </div>
    </div>
  </article>
  )
}






function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/room">Room</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/signup">signup</Link>
            </li>

          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/room">
            <Room />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}





function Room() {
  return (

        <div>
          {/* Required meta tags */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {/* Bootstrap CSS */}
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,400;1,300&display=swap" rel="stylesheet" />
          <title>Dashboard</title>
          <Dashboard pageName={"Dashboard"} username={"person mcPerson"} followers={111}></Dashboard>
          <section className="chat m-auto m-">
            <div className="chat-header">
              <div className="float-left">
                <div className="live container"><div className="green-circle" /> <p className="room-title">Live</p></div>
              </div>
              <div className="abs-center">
                <h2 className="abs-inner club-title">Board name</h2>
              </div>
            </div>
            <div className="chat-body">
              <section className="chatbox">
                <section className="chat-window">
                  <RemoteTextMessage userName={'Jose'} timeStamp={new Date().toLocaleString('en-GB', { timeZone: 'UTC' })} message={' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius, neque non tristique tincidunt, mauris nunc efficitur erat, elementum semper justo odio id nisi.'}></RemoteTextMessage>
                  <OwnTextMessage message={'this is my own message'} timeStamp={new Date().toLocaleString('en-GB', { timeZone: 'UTC' })}></OwnTextMessage>
                  <RemoteTextMessage image={sample_img} message={"I'm writing to you again!"} userName={"Sven"} timeStamp={new Date().toLocaleString('en-GB', { timeZone: 'UTC' })}></RemoteTextMessage>
                  <RemoteTextMessage image={'https://paulryan.com.au/wp-content/uploads/2015/01/high-resolution-wallpapers-25.jpg'} message={"this image is very large!"} userName={"Luis"} timeStamp={new Date().toLocaleString('en-GB', { timeZone: 'UTC' })} ></RemoteTextMessage>
                  <OwnTextMessage message={"this is my last message"} timeStamp={new Date().toLocaleString('en-GB', { timeZone: 'UTC' })} ></OwnTextMessage>
                  <AdminMessage message={"some admin' message"} userName={"Admination"} timeStamp={new Date().toLocaleString('en-GB', { timeZone: 'UTC' })} ></AdminMessage>
                  <OwnAdminMessage message={"look I am an admin now!"} userName={"Admination"} timeStamp={new Date().toLocaleString('en-GB', { timeZone: 'UTC' })} ></OwnAdminMessage>
                  
                
                
                </section>
                <form className="chat-input" onsubmit="return false;">
                  <input type="text" autoComplete="on" placeholder="Type a message" className="text-input" />
                  <button>
                    Send
                  </button>
                  <div className="file-link-wrapper">
                    <button className="file-submit">+ File</button>
                    <button className="link-submit">+ Link</button>
                    </div>

                </form>
              </section>
            </div>
          </section>
          {/* Optional JavaScript */}
          {/* jQuery first, then Popper.js, then Bootstrap JS */}

        </div>
    
  );
}

export default App;
