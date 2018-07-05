import { createStore, applyMiddleware, combineReducers } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import { dayReducer } from './reducer';
import { weekReducer } from './week';

const rootReducer = combineReducers({ day: dayReducer, week: weekReducer });


const client = axios.create({
    baseURL: 'https://api.openweathermap.org/',
});


const store = createStore(rootReducer, applyMiddleware(axiosMiddleware(client)));

export default store;
