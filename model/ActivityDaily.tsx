export interface ActivityDailyInterface {
  status: ActivityDailyStatus;
  timestamp: number;
}

export enum ActivityDailyStatus {
  Empty = '😟',
  Half = '🤨',
  Perfomed = '🤩',
}

export default class ActivityDaily implements ActivityDailyInterface {
  status: ActivityDailyStatus = ActivityDailyStatus.Empty;
  timestamp: number = Date.now();
}
