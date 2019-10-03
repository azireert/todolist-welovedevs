import {LOGIN_USER, REGISTER_USER} from "../actions/types";

const initialState = {
    firebaseUser: {

    },
};


export default (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_USER: {
            const newState = {};

            return newState;
        }


        case REGISTER_USER: {
            const newState = {};

            return newState;
        }

        default:
            return state;
    }
};
