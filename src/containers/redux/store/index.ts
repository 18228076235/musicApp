import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import logger from 'redux-logger'
const { forwardToMain, replayActionRenderer } = require('electron-redux')


const configureStore = ()=>{
    const store =  createStore(
        rootReducer,
        {},
       applyMiddleware(forwardToMain,thunk, logger)
    )
    replayActionRenderer(store)
    return store
}
export default configureStore


