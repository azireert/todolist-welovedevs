import { createStore } from 'redux';
import manageList from './reducers/listReducer'

export default createStore(manageList)
