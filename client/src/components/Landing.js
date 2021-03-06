import React, {Component} from "react"
import {connect} from "react-redux"

import {Jumbotron, Container} from "react-bootstrap"

import serverPath from "./serverPath"

class Landing extends Component {
    renderText(){
        switch(this.props.auth){
            case null:
                return null
            case false:
                return "/auth/google"
            default:
                return "/surveys"
        }
    }
    render() {
        return (
            <div>
                <Jumbotron className="text-center">
                    <h2>Send Surveys to Anyone!</h2>
                    <a href={serverPath() + this.renderText()} className="btn btn-primary m-4">To your surveys</a>
                </Jumbotron>
                <Container>
                    <h1> How to use:</h1>
                    <ul>
                        <li>Click on "To your surveys" or "Signin with google"</li>
                        <li>Singin using your google account</li>
                    </ul>
                </Container>
            </div>
        )
    }
}

function mapStateToProps({auth}) {
    return {auth}
}

export default connect(mapStateToProps)(Landing)