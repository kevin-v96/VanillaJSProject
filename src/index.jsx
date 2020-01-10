import React from 'react';
import ReactDOM from 'react-dom';

const App = function (props){
  return (
  <div>
    <h1>{props.text}</h1>
  </div>)
  ;
}

ReactDOM.render(
  <App text={"Hello World"} />,
  document.getElementById('root')
);