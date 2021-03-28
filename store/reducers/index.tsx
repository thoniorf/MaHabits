import {combineReducers} from '@reduxjs/toolkit';
import activitiesReducer from './activitiesReducer';

const rootReducer = combineReducers({
  activities: activitiesReducer,
});

export default rootReducer;
