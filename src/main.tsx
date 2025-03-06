import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ThemeProvider } from './providers/ThemeProvider';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider> {/* Wrap the app in ThemeProvider */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);