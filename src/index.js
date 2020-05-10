import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
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

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
