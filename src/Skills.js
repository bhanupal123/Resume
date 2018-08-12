import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle } from 'reactstrap';


export default class AboutMe extends React.Component {
    render(){
        return(
        <div>  
            <Card>
                <CardBody>
                <CardText> My name is Bhanupal Singh. I specialize in Full Stack development using PHP, JAVA, React, Node, AngularJS. I always look for optimizing the code and enhancing the performance of the application. I am self motivated, good team player and a quick learner. If you are looking for a tech geek who is goal oriented, willing to learn new technologies, and who likes to get things done in time, then I am the man for the job.</CardText>
                </CardBody>
            </Card>
            <div>
                <a href="https://www.linkedin.com/in/bhanupal-singh-b3070b9b/" target="_blank" className="btn LinkedInButton" ><i className="fab fa-linkedin-in"></i>LinkedIn</a>
                <a href="https://github.com/bhanupal123" target="_blank" className="btn LinkedInButton" ><i className="fab fa-github"></i>Github</a>
                <a href={require("./static/Resume/Resume_bhanupal.pdf")} target="_blank" className="btn LinkedInButton" ><i className="fas fa-link"></i>Resume</a>
            </div>
        </div>
        )
    }
} 