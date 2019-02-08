import React from 'react';
import { Card,  CardText, CardBody, 
    CardTitle, CardSubtitle } from 'reactstrap';
import PropTypes from "prop-types";

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
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
  };
  
  CardText.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
  };
  
  CardTitle.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
  };