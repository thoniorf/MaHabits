import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Activity} from '../../model/Activity.type';
import {LocalStorage} from '../../repository/local/LocalStorage';
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
      LocalStorage.save('activities', JSON.stringify(state.activities));
    },
    loadActivitiesFromLocal: (state) => {
      const localStorageObj = LocalStorage.loadString('activities');
      if (localStorageObj) {
        state.activities = JSON.parse(localStorageObj);
      }
    },
  },
});

export const {addActivity, loadActivitiesFromLocal} = activitiesSlice.actions;
export const selectActivities = (state: RootState) =>
  state.activities.activities;

export default activitiesSlice.reducer;
