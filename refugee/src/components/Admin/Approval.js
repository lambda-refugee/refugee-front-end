import React from 'react';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import PropTypes from "prop-types";


function Approval({stories, match, deleteStory, toggleApproval}) {
    const story = stories.find(submission => `${submission.id}` === match.params.id);

    return (
        <div className="story-wrapper">
            <div className="IndivStory">
                <Card>
                    {/* individual story card that will appear on approval page
                    is populated with data using props from above */}
                    <CardBody>

                    <CardTitle>{story.title}</CardTitle>
                    <CardSubtitle>{story.country}</CardSubtitle>
                    <CardText>{story.text}</CardText>
                    
                    {/* button with ability to toggle story to approved */}
                    <Button onClick={e => {
                    toggleApproval(e, story);
                    }} 
                    className="approve-button">Approve</Button>

                    {/* button wih ability to delete story */}
                    <Button onClick={e => {
                    deleteStory(e, story.id);
                    window.location = '#/approvals';
                    }}
                    className="delete-button">Delete</Button>

                    </CardBody>
                </Card>

            </div>
        </div>
    )
}

export default Approval;

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