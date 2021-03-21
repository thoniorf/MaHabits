import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ActivityCard from '../../components/ActivityCard';
import {Activity} from '../../model/Activity.type';
import {ActivityDailyStatus} from '../../model/ActivityDaily';

const exampleActivity: Activity = {
  title: 'Example Activity',
  description: 'This is an example activity',
  dailies: [
    {status: ActivityDailyStatus.Empty, timestamp: Date.now()},
    {status: ActivityDailyStatus.Empty, timestamp: Date.now() + 1},
    {status: ActivityDailyStatus.Empty, timestamp: Date.now() + 2},
  ],
};

const exampleList = [
  exampleActivity,
  exampleActivity,
  exampleActivity,
  exampleActivity,
  exampleActivity,
  exampleActivity,
];

const styles = StyleSheet.create({
  listItem: {
    marginTop: 8,
    marginBottom: 8,
  },
});

const ActivitiesCardList = () => {
  const [activities, setActivities] = useState(exampleList);

  return (
    <View>
      {activities.map((activity, index) => (
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
