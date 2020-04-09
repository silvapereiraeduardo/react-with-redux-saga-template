import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from './assets/images/logo.svg';
import './App.css';
import Counter from './components/Counter';
import {
  increment,
  decrement,
  incrementAsync,
  decrementAsync
} from './redux/counter/actions';
import { getCounter } from './redux/counter/selectors';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(getCounter);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter
          value={counter}
          onIncrement={() => dispatch(increment())}
          onIncrementAsync={() => dispatch(incrementAsync())}
          onDecrement={() => dispatch(decrement())}
          onDecrementAsync={() => dispatch(decrementAsync())}
        />
      </header>
    </div>
  );
}

export default App;
