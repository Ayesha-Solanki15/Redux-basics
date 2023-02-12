import { useSelector, useDispatch } from 'react-redux';
//useSelector helps us to select a part of the state from our managed store
import { counterActions } from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);//the function inside useSelector will be executed for us by redux
  const show = useSelector(state => state.counter.showCounter);

  //Redux sets up a subscription for this component and whenever the state changes in the store, this component will be re-evaluated. If this component unmounts then react redux will automatically cancels the subscription from the component.

  const incrementHandler = () => {
    // dispatch({type: 'increment'});
    dispatch(counterActions.increment())
  };
  const decrementHandler = () => {
    // dispatch({type: 'decrement'});
    dispatch(counterActions.decrement());
  };
  
  //this has an extra payload (extra data that it carries)
  const increaseHandler = () => {
    // dispatch({type: 'increase', amount: 5});
    dispatch(counterActions.increase(10));
  };
  const toggleCounterHandler = () => {
    // dispatch({type: 'toggle'});
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler }>Increment</button>
        <button onClick={increaseHandler }>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;


//for class-based components
/*
import {connect} from 'react-redux';
import {Component} from 'react';

//the main question here is that how do we use redux hooks here, hooks can't be used in class-based components
//React redux uses a connect (imported) to connect class-based components to redux hooks, (can be used for functional components as well)

class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }
  decrementHandler() {
    this.props.decrememt();
  }
  toggleCounterHandler() {

  }

  render() {
    return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{this.props.counter}</div>
      <div>
        <button onClick={this.incrementHandler.bind(this) }>Increment</button>
        <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
      </div>
      <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
  }
}

//first function maps redux states to props
const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {dispatch({type: 'increment'})}
    decrement: () => {dispatch({type: 'decrement'})}
  }
}

//connect also needs two arguments, and both are functions
export default connect(mapStateToProps, mapDispatchToProps)(Counter);//this is how we use redux hooks in class based components, connect returns a new function which we call by passing our component as a argument.
*/