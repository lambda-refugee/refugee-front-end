import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle } from 'reactstrap';

function Story({stories, history, match}) {
    const story = stories.find(submission => `${submission.id}` === match.params.id);

    return (

        <div>
            <Card className="indv-story-card">
                <CardBody>
                    <CardTitle className="submitter-name">{story.title}</CardTitle>
                    <CardSubtitle className="submitter-country">{story.country}</CardSubtitle>
                </CardBody>
                
                <CardBody>
                    <CardText>{story.text}</CardText>
               </CardBody>
            </Card>
        </div>

        
    );
}


export default Story;