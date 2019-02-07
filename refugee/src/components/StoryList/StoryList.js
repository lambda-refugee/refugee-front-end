import React from 'react';
import {Link} from 'react-router-dom';

import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle } from 'reactstrap';

function StoryList(props) {
    function routeToStory(e, story) {
        e.preventDefault();
        props.history.push(`/story-list/${story.id}`);
    }

    return (
        <div className="story-list">           

            {props.stories.filter((story) => (
                story.approved === 1
            )).map((story) => (
            <div>
                <div
                    onClick={e => routeToStory(e, story)}
                    className="story-card"
                    key={story.id}
                >
                
                <Card className="story-card-list">
                    <CardBody>
                        <CardTitle>{story.title}</CardTitle>
                        <CardSubtitle>{story.country}</CardSubtitle>
                    </CardBody>
                   
                    <CardBody>
                        <CardText>{story.text}</CardText>
                    </CardBody>

                </Card>

                </div>

            </div>
            ))}
        
        
        </div>
    );
}

export default StoryList;