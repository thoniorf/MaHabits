import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {Card, Paragraph, Title} from 'react-native-paper';
import {Activity} from '../model/Activity.type';
import ActivityCardActionButton from './ActivityCardActionButton';

type ActivityCardProps = {
  activity: Activity;
  style?: StyleProp<ViewStyle>;
};

const ActivityCard: React.FC<ActivityCardProps> = ({activity, style}) => {
  const {title, dailies, description} = activity;

  return (
    <Card style={style}>
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>{description ?? 'No description'}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Paragraph>
          {dailies?.map((daily, index) => {
            return (
              <ActivityCardActionButton key={title + index} activity={daily} />
            );
          })}
        </Paragraph>
      </Card.Actions>
    </Card>
  );
};

export default ActivityCard;
