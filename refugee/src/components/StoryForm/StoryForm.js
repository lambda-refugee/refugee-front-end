import React from 'react';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function StoryForm(props) {

    const handleClick = e => {
        e.preventDefault();
        props.addStory();
        window.location = "/";
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
