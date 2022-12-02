import React, { useEffect, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const App = () => {
  const [name] = React.useState('ping');
  const [time, setTime] = React.useState('');

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });

  return (
    <div id="main">
      <h3>Hello, {name}</h3>
      <h4>{time}</h4>
    </div>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
