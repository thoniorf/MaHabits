import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ActivityCard from '../../components/ActivityCard';
import {Activity} from '../../model/Activity.type';
import {ActivityDailyStatus} from '../../model/ActivityDaily';
import {useAppSelector} from '../../store/hooks';
import {selectActivities} from '../../store/reducers/activitiesReducer';

const exampleActivity: Activity = {
  title: 'Example Activity',
  description: 'This is an example activity',
  dailies: [
    {status: ActivityDailyStatus.Empty, timestamp: Date.now()},
    {status: ActivityDailyStatus.Empty, timestamp: Date.now() + 1},
    {status: ActivityDailyStatus.Empty, timestamp: Date.now() + 2},
  ],
};

const styles = StyleSheet.create({
  listItem: {
    marginTop: 8,
    marginBottom: 8,
  },
});

const ActivitiesCardList = () => {
  const stateActivities = useAppSelector(selectActivities);

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
