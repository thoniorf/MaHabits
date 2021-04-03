export enum ActivityDailyStatus {
  Empty = '😟',
  Half = '🤨',
  Perfomed = '🤩',
}

export type ActivityDaily = {
  status: ActivityDailyStatus;
  timestamp: number;
};
