import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return <div>
      <h1>React</h1>
      <p>This is sample component.</p>
      <p>これはサンプルのコンポーネントです。</p>
    </div>;
  };
}

// 外部から利用できるようにしている
export default App;