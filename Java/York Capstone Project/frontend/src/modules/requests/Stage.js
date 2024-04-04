import {FAILED, STORE_STAGES} from "../Reducer";

const BASE_URL = "http://localhost:8081"


export function createStage(title, description) {
    return async (dispatch, getState) => {
        const token = getState().token;
        const response = await fetch(`${BASE_URL}/createStage?token=${token}&title=${title}&description=${description}`)
        if(!response.ok) {
            let data = await response.json();
            return dispatch({type: FAILED, data: data.message})
        }
        dispatch(getStages());
    }
}

export function getStages() {
    return async (dispatch, getState) => {
        const response = await fetch(`${BASE_URL}/stageList`)
        const data = await response.json();
        dispatch({type: STORE_STAGES, data});
    }
}

export function editStage(title, description) {
    return async (dispatch, getState) => {
        let stage = getState().selection;
        let token = getState().token;
        stage.title = title ? title : stage.title;
        stage.description = description ? description : stage.description;
        const response = await fetch(`${BASE_URL}/editStage?token=${token}`, {
            method: "POST",
            body: JSON.stringify(stage),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (!response.ok) {
            let data = await response.json();
            return dispatch({type: FAILED, data: data.message})
        }
        dispatch(getStages());
    }
}

export function deleteStage() {
    return async (dispatch, getState) => {
        let stage = getState().selection;
        let token = getState().token;
        const response = await fetch(
            `${BASE_URL}/deleteStage?token=${token}&id=${stage.id}`,
            {
                method: "DELETE",
            })
        if (!response.ok) {
            let data = await response.json();
            return dispatch({type: FAILED, data: data.message})
        }
        dispatch(getStages());
    }
}