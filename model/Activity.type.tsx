import ActivityDaily from './ActivityDaily';

export type Activity = {
  title: string;
  description?: string;
  dailies?: ActivityDaily[];
};
