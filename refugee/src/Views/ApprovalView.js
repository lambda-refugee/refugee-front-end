import React from 'react';
import {connect} from 'react-redux';

import {getStories} from '../store/actions';

import ApprovalList from '../components/Admin/ApprovalList';

class ApprovalView extends React.Component {
    state = {
        stories: []
    };

    //upon mounting gets the stories from the backend stories database
    componentDidMount() {
        this.props.getStories();
    }

    

    //renders the ApprovalList component and passes it the included props below
    render() {
        return (
            <div className="ApprovalPage">
            <h2>Pending Approval List</h2>

            <ApprovalList //pass these props into the ApprovalList component
                history={this.props.history}
                getItemById={this.props.getItemById}
                stories={this.props.stories}
                getStories={this.props.getStories}
            />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    stories: state.stories
});

export default connect(
    mapStateToProps,
    {getStories}
)(ApprovalView);