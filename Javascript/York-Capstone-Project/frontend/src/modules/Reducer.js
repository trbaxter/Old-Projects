const initialState = {
    token: null,
    firstName: null,
    error: null,
    stages: [],
    comments: [],
    selection: null,
    signupMessage: ""
}

export const FAILED = "FAILED"
export const STORE_TOKEN = "STORE_TOKEN"
export const REMOVE_TOKEN = "REMOVE_TOKEN"
export const STORE_STAGES = "STORE_STAGES"
export const SHOW_STAGES = "SHOW_STAGES"
export const CLEAR_SELECTION = "CLEAR_SELECTION"
export const SIGNUP_MESSAGE = "SIGNUP_MESSAGE"
export const STORE_FIRSTNAME = "STORE_FIRSTNAME"


export default function(state=initialState, action) {
    state.error = null;
    switch (action.type) {
        case STORE_TOKEN: {
            return {...state, token: action.data, error: ""}
        }
        case STORE_FIRSTNAME: {
            return {...state, firstName: action.data}
        }
        case SIGNUP_MESSAGE: {
            return {...state, signupMessage: action.data}
        }
        case STORE_STAGES: {
            return {...state, stages: action.data}
        }
        case SHOW_STAGES: {
            return {...state, selection: state.stages.find(stage => stage.id === action.data)}
        }
        case CLEAR_SELECTION: {
            return {...state, selection: null}
        }
        case REMOVE_TOKEN: {
            return {...state, token: null, signupMessage: ""}
        }
        case FAILED: {
            return {...state, error: action.data}
        }


    }
    return state
}

