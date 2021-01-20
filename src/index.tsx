import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DndProvider from './hooks/DndProvider';

ReactDOM.render(
  <DndProvider>
    <App />
  </DndProvider>,
  document.getElementById('root')
);
