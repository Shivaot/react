import * as actionTypes from '../actions';

const initialState = { counter: 0 };

// here the return does not merges the old and new state but returns the new state overriding the older one
// handling immutability:
// -> spread operator
// -> Object.assign({},state)
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.INCREMENT:
			const newState = Object.assign({}, state); // again this is not deep copying
			newState.counter = state.counter + 1;
			return newState;
		case actionTypes.DECREMENT:
			return {
				...state,
				counter: state.counter - 1,
			};
		case actionTypes.ADD:
			return {
				...state,
				counter: state.counter + action.value,
			};
		case actionTypes.SUBTRACT:
			return {
				...state,
				counter: state.counter - action.value,
			};
	}
	return state;
};

export default reducer;
