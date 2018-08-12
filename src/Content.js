import React, { Component } from 'react';
import { Navbar , NavItem , Nav } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react'
import { Switch, Route , BrowserRouter as Router } from 'react-router-dom';
import Skills from './Skills'
import Contacts from './Contacts'


export default class Content extends React.Component{
    render(){
        return(
            <div>    
                <Navbar inverse collapseOnSelect className="customNavBar hideMainBar" > 
                    <NavItem eventKey={0} href="/" >
                        <i className="far fa-code linkIcons colordiv"> 
                            &nbsp;About Me
                        </i>
                    </NavItem>
                    <NavItem eventKey={1} href="/skills" >
                        <i className="far fa-code linkIcons colordiv"> 
                            &nbsp;Skills
                        </i>
                    </NavItem>
                    <NavItem eventKey={2} href="/workexperience" >
                        <i className="far fa-building linkIcons colordiv" >
                            &nbsp;Work Experience
                        </i>
                    </NavItem>
                    <NavItem eventKey={3} href="/projects" >
                        <i className="far fa-desktop  colordiv" >
                            &nbsp;Projects
                        </i>
                    </NavItem>
                    <NavItem eventKey={4} href="/contact" >
                        <i className="far fa-envelope linkIcons colordiv" >
                            &nbsp;Contact Me
                        </i>
                    </NavItem>
                        
                    
                </Navbar>
                <div>
                    <Router >
                    <Switch>
                        <Route path='/about' component={Content} />
                        <Route path='/skills' component={Skills} />
                        <Route path='/workexperience' component={Content} />
                        <Route path='/projects' component={Content} />
                        <Route path='/contact' component={Contacts} />
                        <Route exact path='/' component={Content} />
                    </Switch>
                    </Router>
                </div>
            </div>
            
        )
    }
}