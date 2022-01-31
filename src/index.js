import React from 'react';
import ReactDOM from 'react-dom';
import { App }from './App';
import { Contador }  from './Contador'


ReactDOM.render(
  <React.StrictMode>
     <App />
     <Contador />
  </React.StrictMode>,
  document.getElementById('root')
);


