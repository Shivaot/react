import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'; // for running async code
import { createStore, combineReducers,applyMiddleware,compose } from 'redux';
import counterReducer from './store/Reducers/counter';
import resultReducer from './store/Reducers/result';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// combineReducer takes multiple objects as separate feature area of our apps 
// which are separate reducers and merger them into one state or one redux store or one reducer(rootReducer)
// to avoid naming conflicts combineReducer adds 1 level of nesting so there is 1 main state but it has 2 additional sub states 
// with keys counterArea and resultArea so access by state.counterArea.property
const rootReducer = combineReducers({
    counterArea: counterReducer,
    resultArea: resultReducer 
})

/**
 * logger is tha name of the middleware
 * which takes a pram as store
 * this es6 arrow function then returns another function
 * this another es6 arrow function will receive the `next` argument
 * name next because it will be a function you can execute to let action continue its journey to the reducer
 * this next function will also be executed by the redux in the end
 * now this next function will also return an arrow function which will receive the action as argument
 * this function will also be executed for us by redux
 * inside this action vala function we can also access the next and the store function
 * here we want to execute the code that we want between action and the reducer
 * in this we may now modify the action (although here we are simply logging)
 * and then call next with action as paramter (modified vala but in our case its unmodified) to continue its journey
 * here we store the next(action) in a result and return it
 * [all of this is executed by the redux we don't have to do anything] we just need to apply this middleware to our store
 */
const logger = state => {
    return next => {
        return action => {
            // code to execute b/w action and reducer
            console.log('[Middleware] Dispatching',action);
            const result = next(action);
            console.log('[Middleware] next state',store.getState());
            return result;
        }
    }
}

const composeEnhancers = (
    process.env.NODE_ENV === 'development'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ) || compose;

//second param is so called enhancer or the middleware 
// thunk is already a middleware thus it will have that function tree
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(logger,thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
