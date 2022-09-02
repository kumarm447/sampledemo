import React from 'react';
//import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>
  <App />
</React.StrictMode>);
*/

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>
  <App />
</React.StrictMode>);


/*
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
//ReactDOM.render(<h1>HELLO REACT</h1>, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
