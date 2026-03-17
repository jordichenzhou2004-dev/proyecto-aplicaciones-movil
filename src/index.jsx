import React from 'react';
import { createRoot } from 'react-dom/client';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import './style.css';

import App from './App';

const root = createRoot(document.getElementById('app'));
root.render(<App />);
