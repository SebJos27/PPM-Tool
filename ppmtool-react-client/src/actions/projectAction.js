import axios from "axios";
import { GET_ERRORS } from "./types";
import { useNavigate } from "react-router-dom";

export const createProject = (project,navigate) => async dispatch => {
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
