import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import  './assets/css/index.css'
import './assets/css/room.css'
import './assets/css/signup.css'
/**
 * 
 * @param {Object: {followers: number, username: string, pageName: String}} props 
 * @returns 
 */
export default function Dashboard(props){
    return(
  <nav className="navbar navbar-expand-sm navbar-light bg-light">
              <a className="navbar-brand" href="#">Kino Club</a>
              <ul className="nav navbar-nav m-auto" >
                <li>
                  <h2 style={{color: "black !important"}}>{props.pageName}</h2>
                </li>
              </ul>
              <ul className="nav navbar-nav float-right">
                <li>
                  <div className="dropleft mr-3">
                    <a className="dropdown-toggle profile-image" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" width={155} />
                    </a>
                    <div className="dropdown-menu" aria-haspopup="true" aria-labelledby="profile">
                      <div className="w-100 dropdown-item " id="profile-dropdown">
                        <div className="card p-3">
                          <div className="d-flex align-items-center">
                            <div className="image"> <img style={{borderRadius: '35%'}} src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" width={155} /> </div>
                            <div className="ml-3 w-100">
                              <h4 className="mb-0 mt-0">{props.username }</h4> 
                              <div className="p-2 mt-2  d-flex justify-content-between rounded  stats">
                                <div className="d-flex flex-column"> <span className="followers">Followers</span> <span className="number2">{props.followers}</span> </div>
                              </div>
                              <div className="button mt-2 d-flex flex-row align-items-center"> <button className="btn btn-sm btn-outline-primary w-100">Sign out</button> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
    )
  }