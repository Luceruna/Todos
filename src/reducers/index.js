import { combineReducers } from 'redux'
import todos from './todos'
import viewFilter from './viewFilter'

const todoApp = combineReducers({
  todos,
  viewFilter
})

export default todoApp
