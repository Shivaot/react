import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';


class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() => this.counterChangedHandler( 'inc' )} />
                <CounterControl label="Decrement" clicked={() => this.counterChangedHandler( 'dec' )}  />
                <CounterControl label="Add 5" clicked={() => this.counterChangedHandler( 'add', 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  />
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
export default connect(mapStateToProps)(Counter);

/* 
after this connect(mapStateToProps) returns a wrapper function
which takes Counter as parameter which returns a hoc 
which Gives a new hoc of Counter which additional properties in our case 'ctr'
*/