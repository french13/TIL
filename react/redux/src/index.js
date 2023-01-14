import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createSlice } from '@reduxjs/toolkit';

createSlice({
  name : 'counter',
  initialState : {value : 0},
  reducers : {
    
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);

