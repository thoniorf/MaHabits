import React from 'react';
import {StyleSheet, View} from 'react-native';
import ActivityCard from '../../components/ActivityCard';
import {useAppSelector} from '../../store/hooks';
import {selectActivities} from '../../store/reducers/activitiesReducer';

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
