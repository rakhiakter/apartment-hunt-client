export const ADD_LOGGEDIN_USER = "ADD_LOGGEDIN_USER";
export const REMOVE_USER = "REMOVE_USER";

export const addLoggedInUser = infos => {
    return {
        type: ADD_LOGGEDIN_USER,
        infos
    }
}