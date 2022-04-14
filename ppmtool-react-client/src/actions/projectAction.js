import axios from "axios";
import { GET_ERRORS, GET_PROJECTS, GET_PROJECT } from "./types";

export const createProject = (project, navigate) => async dispatch => {
    try {
        const res = await axios.post("http://localhost:8080/api/project", project);
        navigate("/dashboard")
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
}

export const getProjects = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/project/all");
    dispatch({
        type: GET_PROJECTS,
        payload: res.data
    });
}

export const getProject = (projectIdentifier, navigate) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8080/api/project/${projectIdentifier}`);
        dispatch({
            type: GET_PROJECT,
            payload: res.data
        });
    }
    catch (error) {
        navigate("/dashboard")
    }
}

export const updateProject = (project, navigate) => async dispatch => {
    try {
        const res = await axios.post("http://localhost:8080/api/project/update", project);
        navigate("/dashboard")
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
}

export const deleteProject = (projectIdentifier) => async dispatch => {
    const res = await axios.delete(`http://localhost:8080/api/project/${projectIdentifier}`);
}