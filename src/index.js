import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DashboardObraAI from './DashboardObraAI';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('✅ React mounted');
root.render(<React.StrictMode><DashboardObraAI /></React.StrictMode>);