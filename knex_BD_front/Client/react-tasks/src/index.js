import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App.jsx';
import { AuthUserTasksProvider } from "./contexts/UserTasks";

ReactDOM.render(
<React.StrictMode>
    <AuthUserTasksProvider>
        <App />
    </AuthUserTasksProvider>
</React.StrictMode>
,document.getElementById('root'));
