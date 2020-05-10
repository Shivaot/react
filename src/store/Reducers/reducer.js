import * as actionTypes from '../action';

const initialState = {persons: []};

const reducer = (state = initialState ,action) => {
    switch(action.type) {
        case actionTypes.ADDPERSON:
            return {
                ...state,
                persons: state.persons.concat({id: Math.random(),name:'Shiva',age:Math.floor( Math.random() * 40 )})
            }
        case actionTypes.REMOVEPERSON:
            const updatedPersons = state.persons.filter(person => person.id !== action.deleteElId);
            return {
                ...state,
                persons: updatedPersons
            }
    }
    return state;
} 

export default reducer;