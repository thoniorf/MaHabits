import React from 'react';
import {StyleSheet} from 'react-native';
import {FAB} from 'react-native-paper';

type AddActivityFABProps = Omit<React.ComponentProps<typeof FAB>, 'icon'> & {
  onPress: () => void;
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
const AddActivityFAB: React.FC<AddActivityFABProps> = ({onPress}) => {
  const handleOnPress = () => {
    onPress();
  };
  return <FAB style={styles.fab} icon="plus" onPress={handleOnPress} />;
};

export default AddActivityFAB;
