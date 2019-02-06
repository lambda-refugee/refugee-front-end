import React from 'react';

function ApprovalList(props) {
    function routeToStory(e, story) {
        e.preventDefault();
        props.history.push(`/approvals/${story.id}`);
        
    }

    

    return (
        <div className="story-list">
            <h2>Approval Needed:</h2>
            <div>
            {props.stories.filter((story) => (      //filters through stories
                story.approved !== 1               //for story approvals of false      
            )).map((story) => (                     //maps through the non approved stories
                <div
                    onClick={e => routeToStory(e, story)}
                    className="storyCard"
                    key={story.id}
                >
                <img
                    className="story-list-image"
                    src={story.imageUrl}
                    alt={story.title}
                />
                <p>{story.title}</p>
                <p>{story.text}</p>
                </div>
            ))}
            </div>
        </div>
    );
}

export default ApprovalList;