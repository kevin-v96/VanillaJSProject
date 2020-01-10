/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  return (
  <div>
    <h1>{props.text}</h1>
    __(This should be a header)
  </div>)
  ;
}

ReactDOM.render(
  <App text={"Hello World"} />,
  document.getElementById('root')
);