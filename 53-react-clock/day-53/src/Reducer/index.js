import { combineReducers } from 'redux';
import listReducer from './listReducer';
import nameReducer from './nameReducer'

const rootReducer = combineReducers({
    
    list: listReducer,
    name: nameReducer
    
}) 



export default rootReducer;