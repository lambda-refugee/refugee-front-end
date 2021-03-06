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
            country: ''
        }
    };

    //upon mounting will populate the story form with data entered from the UI side
    componentDidMount() {
        console.log(this.props.location.search)
        const params = new URLSearchParams(this.props.location.search)
        // If the query params include a `name` field, use that to initialize state
        params.has('name') && this.setState(({ story }) => ({
            story: {
                ...story,
                title: params.get('name')
            }
        }))
        // Same for country of origin
        params.has('country') && this.setState(({ story }) => ({
            story: {
                ...story,
                country: params.get('country')
            }
        }))
    }

    //updates the form fields to whatever is being typed by the user
    handleChange = e => {
        this.setState({
            story: {
                ...this.state.story,
                [e.target.name]: e.target.value
            }
        });
    };

    //creates an add story function from the add story action to be passed as props
    addStory = () => {
        this.props.submitStory(this.state.story);
    };

    //renders the story form component and passes it the included props
    render() {
        return (
            <div>
                <StoryForm 
                    handleChange={this.handleChange}
                    story={this.state.story}
                    addStory={this.addStory}
                />

            <div className="view-bottom-image">
                <img src="../images/refugee5.png" alt="Syrian Refugees coming ashore in a boat"/>
            </div>

            </div>
        )
    }

}

const mapStateToProps = state => ({});

export default connect(
    mapStateToProps,
    {submitStory}
)(AddNewStory);