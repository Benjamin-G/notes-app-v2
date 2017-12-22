import { createStore , combineReducers, applyMiddleware , compose } from 'redux'
import thunk from 'redux-thunk'

import notesReducer from '../reducers/notes'
import authReducer from '../reducers/auth'
import selectedIdReducer from '../reducers/selectednote'


//Store creation

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    combineReducers({
      notes: notesReducer,
      auth: authReducer,
      selectedNoteId: selectedIdReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  )
  return store
}


