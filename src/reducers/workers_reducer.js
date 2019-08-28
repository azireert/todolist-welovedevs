import { FETCH_TODOS } from "../actions/types";

const initialState = {
    workers: {},
    hasReceivedWorkers: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TODOS: {
            const newState = {
                ...state,
                workers: {
                    ...action.payload
                }
            };

            return newState;
        }


        case FETCH_TODO: {
            const newState = {
                ...state,
                workers: {
                    ...state.workers,
                    [action.id]: action.worker
                }
            };

            return newState;
        }

        default:
            return state;
    }
};
