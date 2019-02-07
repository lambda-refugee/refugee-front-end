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
                <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                    <CardText>{story.text}</CardText>
               </CardBody>
            </Card>
        </div>

        
    );
}


export default Story;