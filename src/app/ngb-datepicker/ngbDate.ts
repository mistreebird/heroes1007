import { common } from '../common';

export class ngbDate {
  year: number;
  month: number;
  day: number;
  hours: number;
  minutes: number;
  seconds: number;
  bHaveTime: boolean;

  // 建構式多載
  constructor(date: Date);
  constructor(date: Date, bHaveTime: boolean);
  constructor(year: number, month: number, day: number);
  constructor(year: number, month: number, day: number, hours: number, minutes: number);
  constructor(dateOrYear: any, HaveTimeOrmonth?: any, day?: number, hours?: number, minutes?: number) {
    this.bHaveTime = false;

    if (typeof dateOrYear === "number") {
      this.year = dateOrYear;
      this.month = HaveTimeOrmonth;
      this.day = day;

      if (typeof hours != "undefined") {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = 0;
        this.bHaveTime = true;
      }
    }
    else {
      var dateTemp: Date = <Date>dateOrYear;

      this.year = dateTemp.getFullYear();
      this.month = dateTemp.getMonth() + 1;
      this.day = dateTemp.getDate();
      this.hours = dateTemp.getHours();
      this.minutes = dateTemp.getMinutes();
      this.seconds = 0;

      if (typeof HaveTimeOrmonth != "undefined")
        this.bHaveTime = HaveTimeOrmonth;

      // 若是沒有指定HaveTime，但是日期有hours || minutes 一樣將 bHaveTime = true
      if (!this.bHaveTime && (this.hours > 0 || this.minutes > 0)) {
        this.bHaveTime = true;
      }
    }
  }

  // 轉成 Date 物件，因 Date Month 為 0~11，所以要 -1
  toDate(): Date {
    return new Date(this.year, (this.month - 1), this.day, this.hours, this.minutes, this.seconds, 0);
  }

  toDateString(): string {

    return this.year + '-' + common.leftPad(this.month,2,'0') + '-' + common.leftPad(this.day,2,'0') + (this.bHaveTime ? ' ' + common.leftPad(this.hours,2,'0') + ':' + common.leftPad(this.minutes,2,'0') + ':' + common.leftPad(this.seconds,2,'0') : '');
  }
}
