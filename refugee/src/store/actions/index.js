import axios from 'axios';

export const GET_STORIES = 'GET_STORIES';
export const GET_STORIES_SUCCESS = 'GET_STORIES_SUCCESS';
export const GET_STORIES_FAILURE = 'GET_STORIES_SUCCESS';

export const SUBMITTING_STORY_START = 'SUBMITTING_STORY_START';
export const SUBMITTING_STORY_SUCCESS = 'SUBMITTING_STORY_SUCCESS';
export const SUBMITTING_FAIL = 'SUBMITTING_FAIL';

export const DELETE_STORY_START = 'DELETE_STORY_START';
export const DELETE_STORY_SUCCESS = 'DELETE_STORY_SUCCESS';
export const DELETE_STORY_FAIL = 'DELETE_STORY_FAIL';

export const TOGGLE_START = 'TOGGLE_START';
export const TOGGLE_APPROVAL = 'TOGGLE_APPROVAL';
export const TOGGLE_FAILURE = 'TOGGLE_FAILURE';


//functionality for fetching the stories data from the backend
//used on the individual story view, the main listed story view and the approval list

export const getStories = () => dispatch => {
    dispatch({type: GET_STORIES});
    axios
        .get('https://ancient-ocean-58774.herokuapp.com/stories')
        .then(res => 
            dispatch({type: GET_STORIES_SUCCESS, payload: res.data}))
        .catch(err => 
            dispatch({type: GET_STORIES_FAILURE, payload: err}));
};


//functionality for user to submit story into approval queue

export const submitStory = story => dispatch => {
    dispatch({type: SUBMITTING_STORY_START});
    
    axios
        .post('https://ancient-ocean-58774.herokuapp.com/stories', story)
        .then(res => {
            dispatch({type: SUBMITTING_STORY_SUCCESS, payload: res.data})
        }) 
        .catch(err => dispatch({type: SUBMITTING_FAIL, payload: err}));        
};



//functionality for admin to delete stories on approval

export const deleteStory = id => dispatch => {
    dispatch({type: DELETE_STORY_START});
    return axios
        .delete(`https://ancient-ocean-58774.herokuapp.com/stories/${id}`)
        .then(res => {
            dispatch({type: DELETE_STORY_SUCCESS, payload: res.data})
            //below code redirects admin upon successful deletion
            window.location = "/approvals";
        })
        .catch(err => dispatch({type: DELETE_STORY_FAIL, payload: err}));
};


//functionality for admin to toggle approved from false to true

export const toggleApproval = id => dispatch => {
    dispatch({type: TOGGLE_START});
    return axios
        .put(`https://ancient-ocean-58774.herokuapp.com/stories/${id}`)
        .then(res => {
            dispatch({type: TOGGLE_APPROVAL, payload: id})
            //below code redirects admin upon successful deletion
            window.location = "/approvals";
        })
        .catch(err => dispatch({type: TOGGLE_FAILURE, payload: err}));
}




