import React, {useState} from 'react';
import {Button, Dialog, Portal, TextInput} from 'react-native-paper';
import {Activity} from '../../model/Activity.type';
import {ActivityDailyStatus} from '../../model/ActivityDaily.type';
import {useAppDispatch} from '../../store/hooks';
import {addActivity} from '../../store/reducers/activitiesReducer';

type AddActivityDialogProps = Omit<
  React.ComponentProps<typeof Dialog>,
  'children'
> & {
  onSave: () => void;
  onDismiss: () => void;
};

const AddActivityDialog: React.FC<AddActivityDialogProps> = ({
  visible,
  onSave,
  onDismiss,
  ...otherProps
}) => {
  const dispatch = useAppDispatch();
  const [activityName, setActivityName] = useState('');
  const handleSave = () => {
    const newActivity: Activity = {
      title: activityName,
      dailies: [
        {status: ActivityDailyStatus.Empty, timestamp: Date.now()},
        {status: ActivityDailyStatus.Empty, timestamp: Date.now()},
        {status: ActivityDailyStatus.Empty, timestamp: Date.now()},
        {status: ActivityDailyStatus.Empty, timestamp: Date.now()},
        {status: ActivityDailyStatus.Empty, timestamp: Date.now()},
        {status: ActivityDailyStatus.Empty, timestamp: Date.now()},
        {status: ActivityDailyStatus.Empty, timestamp: Date.now()},
      ],
    };
    dispatch(addActivity(newActivity));
    onSave();
  };
  const handleDismiss = () => {
    setActivityName('');
    onDismiss();
  };

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={handleDismiss} {...otherProps}>
        <Dialog.Title>New activity</Dialog.Title>
        <Dialog.Content>
          <TextInput
            label="Activity title"
            placeholder="Type here the activity title"
            value={activityName}
            onChangeText={(text) => setActivityName(text)}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={handleDismiss}>Cancel</Button>
          <Button onPress={handleSave}>Save</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default AddActivityDialog;
