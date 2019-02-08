import React from 'react';
import PropTypes from "prop-types";

import { Card, CardText, CardBody, 
    CardTitle, CardSubtitle } from 'reactstrap';

function StoryList(props) {
    //event handler that routes to individual story card
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


Card.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    inverse: PropTypes.bool,
    color: PropTypes.string,
    body: PropTypes.bool,
    className: PropTypes.string
  };
  
  CardBody.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
  };

  CardSubtitle.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
  };
  
  CardText.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
  };
  
  CardTitle.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
  };