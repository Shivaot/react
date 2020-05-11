//this file is now an actionCreator

import * as actionTypes from './actionTypes';


// helper function for async which is sync
export const saveResult = (result) => {
    return {
        type: actionTypes.STORE,
        result: result
    }
}

export const store = (result) => {
    // we can access dispatch here coz of thunk (which is a middleware thus runs b/w the dispatching of action and till it reaches reducer)
    // we still dispatches the action but thunk comes it b/w takes the old action , blocks and dispatches it in the future
    // in short thunk can decide to dispatch the action with some delay thus async code 
    // we can also getState here to get the current state and do some changes like get value in state by a particular id
    // don't overuse getState u can id as a value param from where action is dispatched
    return (dispatch, getState) => {
        setTimeout(() => {
            // now after some delay we can dispatch whatever we want
            const oldCount = getState().counterArea.counter;
            console.log(oldCount);
            dispatch(saveResult(result));
        },2000);
    }
   
};

export const deleteResult = (deleteElId) => {
    return {
        type: actionTypes.DELETE,
        deleteElId: deleteElId
    }
}