export class ngbDate {
  year: number;
  month: number;
  day: number;
  hours: number;
  minutes: number;
  seconds: number;
  bHaveTime: boolean;

  // 建構式多載
  constructor(date: Date, bHaveTime: boolean);
  constructor(year: number, month: number, day: number);
  constructor(year: number, month: number, day: number, hours: number, minutes: number);
  constructor(dateOrYear: any, HaveTimeOrmonth?: any, day?: number, hours?: number, minutes?: number) {
    this.bHaveTime = false;
    if (typeof dateOrYear === "number") {
      this.year = dateOrYear;
      this.month = HaveTimeOrmonth;
      this.day = day;
      if (typeof hours != undefined) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = 0;
        this.bHaveTime = true;
      }
    }
    else {

      var dateTemp : Date = dateOrYear ;
      this.bHaveTime = HaveTimeOrmonth ;

       alert(typeof dateTemp) ;
      alert(this.bHaveTime) ;
      this.year = dateTemp.getFullYear() ;
      this.month = dateTemp.getMonth() + 1;
      this.day = dateTemp.getDay() ;
      if (this.bHaveTime) {
        this.hours = dateOrYear.hours;
        this.minutes = dateOrYear.minutes;
        this.seconds = dateOrYear.seconds;
      }
      else
      {
        this.hours = 0 ;
        this.minutes = 0 ;
        this.seconds = 0 ;
      }
    }
  }

  // 轉成 Date 物件，因 Date Month 為 0~11，所以要 -1
  toDate(): Date {
    return new Date(this.year, (this.month - 1), this.day, this.hours, this.minutes, this.seconds, 0);
  }

  toDateString(): string {
    return this.year + '-' + this.month + '-' + this.day + (this.bHaveTime ? ' ' + this.hours + ':' + this.minutes + ':' + this.seconds : '');
  }
}
