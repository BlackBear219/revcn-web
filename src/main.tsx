import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <FluentProvider theme={webLightTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FluentProvider>,
)
