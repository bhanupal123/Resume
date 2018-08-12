import React, { Component } from 'react';
import { Switch, Route , BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import './static/css/style1.css'
import Content from './Content'
import Skills from './Skills'
import Contacts from './Contacts'

class App extends Component {
  render() {
    return (
	<div className="innerBody">
		<div className="row">
			<div className="col-lg-3">
        <div className="leftBarBody" >
          <div>
            <div className="userImageDiv">
              <img src={require("./static/image/user.jpg")  } className="userImage" alt="User"/>
            </div>
            <div className="userName">Bhanupal Singh Rathore</div>
            <div className="tagLine" >Software Developer at Traform Travels</div>
            <div className="locationLine" ><i className="fas fa-map-marker-alt"></i> Bangalore</div>
            <div className="headLine">Skilled in Full Stack Software Development, React, Redux, Node, JavaScript, Java, Spring, REST API, Hibernate  and MongoDB</div>
            <div className="educationLine" ><i className="fas fa-user-graduate"></i> Graduate from Nirma University, Ahmedabad</div>
            <br/>
          </div>
        </div>
      </div>
      
      <div className="col-lg-9 rightBarBody">
        <Content />
        <div className="createdByTag">
		      <span className="smallCreatedByTag">Designed and Developed By:</span> Bhanupal Singh
	      </div>
      </div>
      
    </div>
  </div>
    );
  }
}

export default App;
