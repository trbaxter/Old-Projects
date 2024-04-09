import {FAILED, REMOVE_TOKEN, SIGNUP_MESSAGE, STORE_FIRSTNAME, STORE_TOKEN} from "../Reducer";
const BASE_URL = "http://localhost:8080"



export function login(username, password) {
    return async (dispatch, getState) => {
        const response = await fetch(`${BASE_URL}/login?username=${username}&password=${password}`)
        let data = await response.json();
        if (response.status > 200) {
            return dispatch({type: FAILED, data: data.message})
        }
        dispatch({type: STORE_TOKEN, data})
    }
}

export function logout() {
    return async (dispatch, getState) => {
        let token = getState().token;
        const response = await fetch(`${BASE_URL}/logout?token=${token}`)
        if (!response.ok) {
            let data = await response.json();
            return dispatch({type: FAILED, data: data.message})
        }
        dispatch({type: REMOVE_TOKEN})
    }
}

export function signup(username, password, firstName, lastName) {
    return async (dispatch, getState) => {
        const response = await fetch(
            `${BASE_URL}/signup`,
            {
                method: "POST",
                body: JSON.stringify({
                    username,
                    password,
                    firstName,
                    lastName
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        if (!response.ok) {
            let data = await response.json();
            return dispatch({type: FAILED, data: data.message})
        }
        dispatch({type: STORE_FIRSTNAME, data: firstName})
        dispatch({type: SIGNUP_MESSAGE, data: "Sign up success! Please log in to continue."})

    }
}