import React, {useState} from 'react';
import './App.css';
import HelloFunction from './components/HelloFunction/HelloFunction';
import HelloClass from './components/HelloClass/HelloClass';
import CountdownClass from './components/CountdownClass/CountdownClass';
import CountdownFunction from './components/CountdownFunction/CountdownFunction';
import Todo from './components/Todo/Todo';


function App() {
  const [isShowClassCountdown, setIsShowClassCountdown] = useState(true);
  const [isShowFunctionCountdown, setIsShowFunctionCountdown] = useState(true);

  // will be called when class countdown reach 0
  const removeClassCountdown = () => {
    setIsShowClassCountdown(false);
  }

  const removeFunctionCountdown = () => {
    setIsShowFunctionCountdown(false);
  }

  return (
    <div className="App">
      <div style={ {float: 'left'} }>
        <h1>Function components</h1>

        <HelloFunction message={'hello function from parent'} />

        { isShowFunctionCountdown && <CountdownFunction time={3} cb={removeFunctionCountdown} />}

        <Todo />
      </div>
      <div style={ {float: 'right'} }>
        <h1>class components</h1>

        <HelloClass  />

        {
          isShowClassCountdown && <CountdownClass time={5} cb={removeClassCountdown} />
        }
      </div>
    </div>
  );
}

export default App;
