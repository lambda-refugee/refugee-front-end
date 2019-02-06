import React from 'react';
import {connect} from 'react-redux';

import {getStories, deleteStory, toggleApproval} from '../store/actions';

import Approval from '../components/Admin/Approval';

class IndivApprovalView extends React.Component {
    componentDidMount() {
        if (this.props.stories.length === 0) {
            this.props.getStories();
        }
    }

    deleteStory = (e, id) => {
        e.preventDefault();
        this.props.deleteStory(id);
        
    };

    toggleApproval = (e, id) => {
        e.preventDefault();
        this.props.toggleApproval(id);
    };

    render() {
        return (
            <Approval  //pass these props to the Approval component
                stories={this.props.stories}
                match={this.props.match}
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
)(IndivApprovalView);