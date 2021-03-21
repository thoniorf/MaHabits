import React, {useState} from 'react';
import {Button} from 'react-native-paper';
import {
  ActivityDailyInterface,
  ActivityDailyStatus,
} from '../model/ActivityDaily';

type ActivityCardActionButtonProps = Omit<
  React.ComponentProps<typeof Button>,
  'children'
> & {
  activity: ActivityDailyInterface;
};

const ActivityCardActionButton: React.FC<ActivityCardActionButtonProps> = ({
  activity,
  ...buttonProps
}) => {
  const [status, setStatus] = useState(activity.status);

  const handleOnClick = () => {
    switch (status) {
      case ActivityDailyStatus.Empty:
        setStatus(ActivityDailyStatus.Half);
        break;
      case ActivityDailyStatus.Half:
        setStatus(ActivityDailyStatus.Perfomed);
        break;
      default:
        setStatus(ActivityDailyStatus.Empty);
        break;
    }
  };
  return (
    <Button
      {...buttonProps}
      onPress={() => {
        handleOnClick();
      }}>
      {status.toString()}
    </Button>
  );
};

export default ActivityCardActionButton;
