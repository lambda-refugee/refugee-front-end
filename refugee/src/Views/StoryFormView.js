import React from 'react';
import {connect} from 'react-redux';

import {submitStory} from '../store/actions';

import StoryForm from '../components/StoryForm/StoryForm';

class AddNewStory extends React.Component {
    state= {
        story: {
            
            title: '',
            text: '',
            approved: 0,
        }
    };

    handleChange = e => {
        this.setState({
            story: {
                ...this.state.story,
                [e.target.name]: e.target.value
            }
        });
    };

    addStory = () => {
        this.props.submitStory(this.state.story);
    };

    render() {
        return (
            <div>
                <StoryForm 
                    handleChange={this.handleChange}
                    story={this.state.story}
                    addStory={this.addStory}
                />

            </div>
        )
    }

}

const mapStateToProps = state => ({});

export default connect(
    mapStateToProps,
    {submitStory}
)(AddNewStory);