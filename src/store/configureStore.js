import { createStore , combineReducers, applyMiddleware , compose } from 'redux'
import thunk from 'redux-thunk'

import notesReducer from '../reducers/notes'
import authReducer from '../reducers/auth'


//Store creation

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    combineReducers({
      notes: notesReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  )
  return store
}


