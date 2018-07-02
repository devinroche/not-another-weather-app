import { createStore, applyMiddleware, combineReducers } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import {day_reducer} from './reducer';
import {week_reducer} from './week';

const rootReducer = combineReducers({day: day_reducer, week: week_reducer})


const client = axios.create({
  baseURL: 'https://api.openweathermap.org/'
})



const store = createStore(rootReducer, applyMiddleware(axiosMiddleware(client)));

export default store
