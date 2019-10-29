import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import budgetReducer from './ducks/budgetReducer'
import userReducer from './ducks/userReducer'


const rootReducer = combineReducers({
    budget: budgetReducer, // how to grab this is this.props.budget
    user: userReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))