import { useSelector, useDispatch } from 'react-redux';

import {counterActions} from "../store/counter";
import classes from './Counter.module.css';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter);
    const showCounter = useSelector(state => state.counter.showCounter);

    const incrementHandler = (count = 1) => {
        dispatch(counterActions.increment(count));
    };

    const decrementHandler = (count = 1) => {
        dispatch(counterActions.decrement(count));
    };

  const toggleCounterHandler = () => {
      dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {showCounter && <div className={classes.value}>{counter}</div>}
        <button onClick={() => incrementHandler()}>Increment</button>
        <button onClick={() => incrementHandler(5)}>Increase by 5</button>
        <button onClick={() => decrementHandler()}>Decrement</button>
        <br />
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
