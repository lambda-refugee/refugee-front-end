import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';


function Approval({stories, match, deleteStory, toggleApproval}) {
    const story = stories.find(submission => `${submission.id}` === match.params.id);

    return (
        <div className="story-wrapper">
            <div className="IndivStory">
                <Card>
                    
                    <CardBody>
                    <CardTitle>{story.title}</CardTitle>
                    <CardSubtitle>{story.country}</CardSubtitle>
                    <CardText>{story.text}</CardText>
                    <Button onClick={e => {
                    toggleApproval(e, story);
                    }} 
                    className="approve-button">Approve</Button>
                    <Button onClick={e => {
                    deleteStory(e, story.id);
                    }}
                    className="delete-button">Delete</Button>
                    </CardBody>
                </Card>

            </div>
        </div>
    )
}

export default Approval;