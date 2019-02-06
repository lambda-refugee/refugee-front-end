import React from 'react';
import {connect} from 'react-redux';

import {getStories} from '../store/actions';

import Story from '../components/Story/Story';

class IndivStoryView extends React.Component {
    componentDidMount() {
        if (this.props.stories.length === 0) {
            this.props.getStories();
        }
    }


    render() {
        return (
            <Story 
                stories={this.props.stories}
                match={this.props.match}
                history={this.props.history}
            />
        )
    }
}

const mapStateToProps = state => ({
    stories: state.stories
});

export default connect(
    mapStateToProps,
    {getStories}
)(IndivStoryView);