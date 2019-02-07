import React from 'react';
import {connect} from 'react-redux';

import {getStories, deleteStory} from '../store/actions';

import StoryList from '../components/StoryList/StoryList';

class StoryListView extends React.Component {
    state= {
        stories: [],
        isLoggedIn: '',
    };

    componentDidMount() {
        this.props.getStories();
    }

    deleteStory = (e, id) => {
        
        this.props.deleteStory(id);
        this.props.getStories();
        // this.forceUpdate();
    };

    render() {
        return (
            
            <div>

            <div><img src="../images/refugee1.png"/></div>

            <StoryList 
                history={this.props.history}
                getItemById={this.props.getItemById}
                stories={this.props.stories}
                isLoggedIn={this.props.isLoggedIn}
                deleteStory={this.deleteStory}
            />
            
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