import { combineReducers } from 'redux'
import {user} from './user'
import { header } from "./header";
const rootReducer = combineReducers({
    user: user,
    header: header
})

export default rootReducer