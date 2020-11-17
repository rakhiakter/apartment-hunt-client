import { ADD_LOGGEDIN_USER } from "../actions/addInfo";

const initialState = {
    info: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LOGGEDIN_USER:
            return { ...state, info: action.infos }

        default:
            return state;
    }
}


export default userReducer;