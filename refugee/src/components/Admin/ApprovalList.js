import React from 'react';

import { Card, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';

function ApprovalList(props) {
    //event handler that on clicking will route the user to the individual story's page
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
                {/* the story card is populated with the data using props */}
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