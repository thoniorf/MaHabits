import {ActivityDaily} from './ActivityDaily.type';

export type Activity = {
  title: string;
  description?: string;
  dailies?: ActivityDaily[];
};
