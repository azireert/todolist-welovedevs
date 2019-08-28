import {combineReducers} from 'redux';
import workersReducers from './workers_reducer';

export default combineReducers({
    workersReducers,
    userReducer
});
