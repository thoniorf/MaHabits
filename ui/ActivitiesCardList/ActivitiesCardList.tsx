import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import ActivityCard from '../../components/ActivityCard';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {
  loadActivitiesFromLocal,
  selectActivities,
} from '../../store/reducers/activitiesReducer';

const styles = StyleSheet.create({
  listItem: {
    marginTop: 8,
    marginBottom: 8,
  },
});

const ActivitiesCardList = () => {
  const stateActivities = useAppSelector(selectActivities);
  const dispatch = useAppDispatch();

  console.log('state', stateActivities);

  useEffect(() => {
    if (!stateActivities.length) {
      console.log('Fetching from local');

      dispatch(loadActivitiesFromLocal());
      console.log('fetched');
    }
  }, [dispatch, stateActivities]);
  return (
    <View>
      {stateActivities.map((activity, index) => (
        <ActivityCard
          key={'activity_card_' + index}
          activity={activity}
          style={styles.listItem}
        />
      ))}
    </View>
  );
};

export default ActivitiesCardList;
