import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/global.scss';

const rootElem = document.querySelector('#root');

if (rootElem) {
  const root = createRoot(rootElem);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
