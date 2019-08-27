const FETCH_TODOS = 'FETCH_TODOS';

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_TODOS:
            return action.payload;
        default:
            return state;
    }
};
