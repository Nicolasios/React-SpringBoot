import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserList from "./components/UserList"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserList/>
)
