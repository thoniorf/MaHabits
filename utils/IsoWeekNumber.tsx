export namespace IsoWeekNumber {
  export function getWeekNumber(date: Date) {
    var d = new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
    );
    var dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil(((d.valueOf() - yearStart.valueOf()) / 86400000 + 1) / 7);
  }
}
