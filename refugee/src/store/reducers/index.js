import {
    GET_STORIES,
    GET_STORIES_SUCCESS,
    GET_STORIES_FAILURE,
    SUBMITTING_STORY_START,
    SUBMITTING_STORY_SUCCESS,
    SUBMITTING_FAIL,
    DELETE_STORY_START,
    DELETE_STORY_SUCCESS,
    DELETE_STORY_FAIL,
    TOGGLE_APPROVAL,
    TOGGLE_START,
} from '../actions';

const initialState = {
    stories: [],
    isLoggedIn: false,
    gettingStories: false,
    submittingStory: true,
    storySubmitted: false,
    deletingStory: false,
    approved: false,
    error: null,
}

function reducer(state = initialState, action) {
    switch(action.type) {

        case GET_STORIES:
        return {
            ...state,
            gettingStories:true
        }
        case  GET_STORIES_SUCCESS:
        return {
            ...state,
            stories: action.payload.s,
            gettingStories: false,
        }
        case GET_STORIES_FAILURE:
        return {
            ...state,
            error: null,
        }


        case SUBMITTING_STORY_START:
        return {
            ...state,
            submittingStory: true,
        }
        case SUBMITTING_STORY_SUCCESS:
        return {
            ...state,
            storySubmitted: true,
        }
        case SUBMITTING_FAIL:
        return {
            ...state,
            error: null,
        }


        case DELETE_STORY_START:
        return {
            ...state,
            deletingStory: true,
        }
        case DELETE_STORY_SUCCESS:
        return {
            ...state,
            deletingStory: false,
        }
        case DELETE_STORY_FAIL:
        return {
            ...state,
            error: null,
        }


        case TOGGLE_APPROVAL:
        return {
            ...state,
            stories: state.stories.map((story, id) =>
                action.payload === story
                ? {...story, approved: 1}
                : story
            )
            // approved: true,
        };
        
        default:
        return state;
    }
}

export default reducer;