import React from 'react';


export default class Contacts extends React.Component {
    render(){
        return(
            <div className="contactMeForm" data-radium="true">
                <form method="post" data-radium="true">
                    <div className="contactFormNameDiv" data-radium="true" >
                        <div className="contactFormTitle">Name</div>
                        <div><input type="text" name="title" id="title" className="contactFormField" required=""/></div>
                    </div>
                    <div className="contactFormEmailDiv" data-radium="true" >
                        <div className="contactFormTitle">Email or Mobile No.</div>
                        <div><input type="email" name="email" id="email" className="contactFormField" required=""/></div>
                    </div>
                    <div className="contactFormBodyDiv" data-radium="true" >
                        <div className="contactFormTitle">Message?</div>
                        <div><textarea type="text" name="body" id="body" className="contactFormField" required=""></textarea></div>
                    </div>
                    <div className="contactFormBtnDiv" data-radium="true"><input type="submit" className="btn sendBtn" value="Submit"/></div>
                </form>
                <div className="sendMailMsg" data-radium="true"></div>
            </div>
        );
    }
}