import { LOGIN, LOGOUT } from "../actions/auth"

const initialState = {
    isAuthenticated : false,
    authToken :  null
}

const authReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case LOGIN:
            return {
                isAuthenticated : true,
                authToken : payload
            };
        case LOGOUT:
            return {
                isAuthenticated : false,
                authToken : null
            }
        default : 
        return state;
    }
};


export default authReducer;