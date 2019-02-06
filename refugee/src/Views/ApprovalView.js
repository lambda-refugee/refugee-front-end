import React from 'react';
import {connect} from 'react-redux';

import {getStories, deleteStory, toggleApproval} from '../store/actions';

import ApprovalList from '../components/Admin/ApprovalList';

class ApprovalView extends React.Component {
    state = {
        stories: []
    };

    componentDidMount() {
        this.props.getStories();
    }

    deleteStory = (e, id) => {
        e.preventDefualt();
        this.props.deleteStory(id);
    };

    toggleApproval = (e, id) => {
        e.preventDefault();
        this.props.toggleApproval(id);
    };


    render() {
        return (
            <ApprovalList 
                history={this.props.history}
                getItemById={this.props.getItemById}
                stories={this.props.stories}
                deleteStory={this.deleteStory}
                toggleApproval={this.toggleApproval}
            />
        )
    }
}

const mapStateToProps = state => ({
    stories: state.stories
});

export default connect(
    mapStateToProps,
    {getStories, deleteStory, toggleApproval}
)(ApprovalView);