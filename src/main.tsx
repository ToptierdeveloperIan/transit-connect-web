import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//pthnpimport App from './App.tsx';
import './index.css';
import 'bootstrap'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from "./App.tsx";
//import Forms from './components/Forms.tsx';
//import VerificationForm from "./components/VerificationForm.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>
);
