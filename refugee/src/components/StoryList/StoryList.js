import React from 'react';
import {Link} from 'react-router-dom';

function StoryList(props) {
    function routeToStory(e, story) {
        e.preventDefault();
        props.history.push(`/story-list/${story.id}`);
    }

    return (
        <div className="story-list">
            {props.stories.map((story) => (
                <div
                    onClick={e => routeToStory(e, story)}
                    className="story-card"
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
    );
}

export default StoryList;