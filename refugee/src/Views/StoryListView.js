import React from 'react';
import {connect} from 'react-redux';

import {getStories} from '../store/actions';

import StoryList from '../components/StoryList/StoryList';

class StoryListView extends React.Component {
    state= {
        stories: []
    };

    componentDidMount() {
        this.props.getStories();
    }

    render() {
        return (
            <StoryList 
                history={this.props.history}
                getItemById={this.props.getItemById}
                stories={this.props.stories}
            />
        );
    }
}

const mapStateToProps = state => ({
    stories: state.stories
});

export default connect(
    mapStateToProps,
    {getStories}
)(StoryListView);