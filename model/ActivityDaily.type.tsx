export enum ActivityDailyStatus {
  Empty = '๐',
  Half = '๐คจ',
  Perfomed = '๐คฉ',
}

export type ActivityDaily = {
  status: ActivityDailyStatus;
  timestamp: number;
};
