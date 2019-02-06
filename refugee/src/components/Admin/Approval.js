import React from 'react';


function Approval({stories, match, deleteStory, toggleApproval}) {
    const story = stories.find(submission => `${submission.id}` === match.params.id);

    return (
        <div className="story-wrapper">
            <div className="IndivStory">
                <div className="story-image">
                    <img />
                </div>
                <div className="story-title">
                    <h2>{story.title}</h2>
                </div>
                <div>
                    <p>{story.text}</p>
                </div>
            </div>
            <button onClick={e => {
                toggleApproval(e, story.id);
            }} 
                className="approve-button"
            >Approve</button>

            <button onClick={e => {
                deleteStory(e, story.id);
            }}
                className="delete-button"
            >Delete Post
            </button>
        </div>
    )
}

export default Approval;