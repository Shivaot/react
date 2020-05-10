import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';


class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
            </div>
        );
    }
}

// we say how the state stored in the redux should be mapped to props
// coz state inside the component no longer exists we take it from redux store
// this takes a function with 1 param state and 
// returns an object which is the mapped props against a particular slice of state 
// Summary -> we say give me the state counter from the global redux store 
// and map it to the property name ctr which we can use inside this component
const mapStateToProps = state => {
    return {
        ctr: state.counter // this state is from redux store (mentioned in reducer)
    };
}

// we say which type of actions do we want to dispatch inside this container
// dispatch is again a function which call store.dispatch behind the scenes
// returns a an object where we can define prop name 
// which will hold the reference to the functions to be executed
// whenever onIncrementCounter will be executed () => dispatch() will be executed 
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD',value: 5}),
        onSubtractCounter: () => dispatch({type: 'SUBTRACT',value:5})
    }
}

/*
connect is function which takes a function and returns a hoc
i.e connect is a function which returns a hoc
whole idea is connect can be used as a function
it takes 2 arguments:
    ->which slice of state i want to get
    ->which actions i want to dispatch
The return of connect() is a wrapper function that takes your component and returns 
a wrapper component with the additional props it injects.
*/
export default connect(mapStateToProps,mapDispatchToProps)(Counter);

/* 
after this connect(mapStateToProps) returns a wrapper function
which takes Counter as parameter which returns a hoc 
which Gives a new hoc of Counter which additional properties in our case 'ctr'
*/