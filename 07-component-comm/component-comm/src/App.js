import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import MsgContext from './contexts/msg.context';

// fajar -> Son
// prop
// ref fajar -> son => catch instance son, instance dom element son
// children => <Child>...</Child>

// props
// cb prop : Son -> Fajar => not so intuitive
// everyone can share a service with rxjs

// context
// Provider, Consumer
// 

function App() {
  const child2Ref = React.createRef();
  const [msg, setMessage] = useState("hello is context working?");

  const changeContext = (newMsg: string) => {
    setMessage(newMsg);
  }

  return (
    <div className="App">
      <div style={{float: 'left'}}>
        <MsgContext.Provider value={ {msg, cb: changeContext} }>
          <Child1 
            message="hello from parent to child" />
        </MsgContext.Provider>
      </div>
      <div style={{float: 'right'}}>
        <Child2 
        />
      </div>
      
    </div>
  );
}

export default App;
