import React from 'react';

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

function ApprovalList(props) {
    function routeToStory(e, story) {
        e.preventDefault();
        props.history.push(`/approvals/${story.id}`);
        
    }

    

    return (
        <div className="story-list">
           
            <div>
            {props.stories.filter((story) => (      //filters through stories
                story.approved !== 1               //for story approvals of false      
            )).map((story) => (                     //maps through the non approved stories
                <div
                    onClick={e => routeToStory(e, story)}
                    className="storyCard"
                    key={story.id}
                >
                    <Card>
                    <CardBody>
                        <CardTitle>{story.title}</CardTitle>
                        <CardSubtitle>{story.country}</CardSubtitle>
                        <CardText>{story.text}</CardText>
                    </CardBody>
                    </Card>
                </div>
            ))}
            </div>
        </div>
    );
}

export default ApprovalList;