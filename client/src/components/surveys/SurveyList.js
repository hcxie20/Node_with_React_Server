import React, {Component} from "react"
import {connect} from "react-redux"
import {fetchSurveys, deleteSurvey} from "../../actions"

import {Card, Button} from "react-bootstrap"

class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys(){
        return this.props.surveys.reverse().map(survey => {
            return (
                <Card key={survey._id} className="m-2">
                    <Card.Header>{survey.title}</Card.Header>
                    <Card.Body>
                        <Card.Title>{survey.title}</Card.Title>
                        <Card.Text>
                            {survey.body}
                        </Card.Text>
                        <Card.Text>
                            <Card.Link href="#">Yes:  {survey.yes}</Card.Link>
                            <Card.Link href="#">No: {survey.no}</Card.Link>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button onClick={() => this.props.deleteSurvey(survey._id)}>
                            Delete Survey
                        </Button>
                        <small className="text-muted float-right">Sent On: {new Date(survey.dateSent).toLocaleDateString()}</small>
                    </Card.Footer>
                </Card>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderSurveys()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {surveys: state.surveys}
}

export default connect(mapStateToProps, {fetchSurveys, deleteSurvey})(SurveyList)