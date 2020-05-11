import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../utility';


const initialState = {results: [] };


const deleteResult = (state,action) => {
    /* (one way of removing)
            const id=2; // get the index somehow
            const newArray = [...state.results]; //this is again not deep copying but we only want to delete elements
            newArray.splice(id,1); 
        */
    // but using filter , it itself returns a copy of original array
    const updatedArray = state.results.filter(result => result.id !== action.deleteElId);
    return updatedObject(state,{results: updatedArray});
}

// here the return does not merges the old and new state but returns the new state overriding the older one
// handling immutability:
// -> spread operator
// -> Object.assign({},state)
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.STORE:
            return updatedObject(state,{results: state.results.concat({value: action.result, id: new Date() })});
		case actionTypes.DELETE:
            return deleteResult(state,action);    
    }
	return state;
};

export default reducer;
