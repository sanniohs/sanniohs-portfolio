import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

// Ensure process.env exists for browser environments
if (typeof window !== 'undefined' && !(window as any).process) {
  (window as any).process = { env: {} };
}

console.log("React version:", React.version);

const render = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error("Root element not found");
    return;
  }

  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("React application rendered to DOM");
  } catch (error) {
    console.error("Critical rendering error:", error);
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', render);
} else {
  render();
}