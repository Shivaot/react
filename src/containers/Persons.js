import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/action';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {

    personDeletedHandler = (personId) => {
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.filter(person => person.id !== personId)}
        } );
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.personAddHandler} />
                {this.props.personsArray.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.personDeleteHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        personsArray: state.persons
    };
} 

const mapDispatchToProps = dispatch => {
    return {
        personAddHandler: () => dispatch({type: actionTypes.ADDPERSON}),
        personDeleteHandler: (id) => dispatch({type: actionTypes.REMOVEPERSON,deleteElId: id})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Persons);