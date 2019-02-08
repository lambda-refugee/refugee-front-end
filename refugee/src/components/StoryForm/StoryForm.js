import React from 'react';
import PropTypes from "prop-types";


import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function StoryForm(props) {

    //event handler that pushes the user to the stories page upon story submission
    const handleClick = e => {
        e.preventDefault();
        props.addStory();
        window.location = "#/"
    }

    return (
        <div className="StoryForm">
            <Form>
                <FormGroup>
                    <Label for="name-title">Name</Label>
                    <Input 
                        type="text" 
                        name="title" 
                        placeholder="please feel free to remain anonymous by entering a false name" 
                        onChange={props.handleChange}
                        value={props.story.title}
                        />
                </FormGroup>
            
                <FormGroup>
                    <Label for="name-country">Country of origin</Label>
                    <Input 
                        type="text" 
                        name="country" 
                        placeholder="" 
                        onChange={props.handleChange}
                        value={props.story.country}
                        />
                </FormGroup>
            
                <FormGroup>
                    <Label for="submission-text">Share your story</Label>
                    <Input 
                        type="textarea" 
                        name="text" 
                        placeholder="..."
                        onChange={props.handleChange}
                        value={props.story.text}
                    />
                </FormGroup>
                <Button onClick={handleClick}>Submit</Button>
           
            </Form>

        </div>
    )

}

export default StoryForm;

Input.propTypes = {
    children: PropTypes.node,
    type: PropTypes.string,
    value: PropTypes.string,
  };
