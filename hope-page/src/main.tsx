import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
  applicationId: 'YOUR_APP_ID', // Replace with your Datadog Application ID
  clientToken: 'YOUR_CLIENT_TOKEN', // Replace with your Datadog Client Token
  site: 'datadoghq.com',
  service: 'yumi-homepage',
  env: 'production',
  sampleRate: 100,
  trackInteractions: true,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
