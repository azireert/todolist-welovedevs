import {combineReducers} from 'redux';
import workersReducers from './workers_reducer';
import userReducer from './user_reducer'

export default combineReducers({
    workersReducers,
    userReducer
});
