import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Activity} from '../../model/Activity.type';
import {RootState} from '../store';

type ActivitiesState = {
  activities: Activity[];
};

const initialState: ActivitiesState = {
  activities: [],
};

export const activitiesSlice = createSlice({
  name: 'activities',
  initialState,
  reducers: {
    addActivity: (state, action: PayloadAction<Activity>) => {
      state.activities = [...state.activities, action.payload];
    },
  },
});

export const {addActivity} = activitiesSlice.actions;
export const selectActivities = (state: RootState) =>
  state.activities.activities;

export default activitiesSlice.reducer;
