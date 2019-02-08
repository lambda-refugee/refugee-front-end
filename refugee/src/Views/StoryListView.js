import React from 'react';
import {connect} from 'react-redux';

import {getStories, deleteStory} from '../store/actions';

import StoryList from '../components/StoryList/StoryList';

class StoryListView extends React.Component {
    state= {
        stories: [],
        isLoggedIn: '',
    };

    // gets stories from the backend story database upon mounting

    componentDidMount() {
        this.props.getStories();
    }


    //renders the storylist component and passes it the necessary props

    render() {
        return (
            
            <div className="story-list-page">

            <div className="story-list-view-image"><img src="../images/refugee1.png"/></div>
            <h1>Our Stories</h1>
            <h5>We live in a global community and we can't really remain isolated. -Robert Kiyoski</h5>
            <StoryList 
                history={this.props.history}
                getItemById={this.props.getItemById}
                stories={this.props.stories}
                isLoggedIn={this.props.isLoggedIn}
                deleteStory={this.deleteStory}
            />

            <div className="view-bottom-image"><img src="../images/refugee6.png"/></div>
            
            </div> 
        );
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn,
    stories: state.stories
});

export default connect(
    mapStateToProps,
    {getStories, deleteStory}
)(StoryListView);