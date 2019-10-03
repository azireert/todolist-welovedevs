import { FETCH_TODOS, FETCH_TODO } from "../actions/types";

const initialState = {
    workers: {},
    hasReceivedWorkers: false
};

export default (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
        case FETCH_TODOS: {
            return {
                ...state,
                workers: {
                    ...action.payload
                },
                hasReceivedWorkers: true
            };
        }
        case FETCH_TODO: {
            return {
                ...state,
                workers: {
                    ...state.workers,
                    [action.id]: action.worker
                },
                hasReceivedWorkers: true
            };
        }

        default:
            return state;
    }
};
