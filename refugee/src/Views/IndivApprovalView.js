import React from 'react';
import {connect} from 'react-redux';

import {getStories} from '../store/actions';

import Approval from '../components/Admin/Approval';

class IndivApprovalView extends React.Component {
    componentDidMount() {
        if (this.props.stories.length === 0) {
            this.props.getStories();
        }
    }

    render() {
        return (
            <Approval
                stories={this.props.stories}
                match={this.props.match}
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
)(IndivApprovalView);