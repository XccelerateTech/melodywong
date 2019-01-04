import { combineReducers } from 'redux';
import listReducer from './listReducer';
import nameReducer from './nameReducer'
import linksReducer from './linksReducer'

const rootReducer = combineReducers({
    
    list: listReducer,
    name: nameReducer,
    links: linksReducer
    
}) 



export default rootReducer;