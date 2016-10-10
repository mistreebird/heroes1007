export class ngbDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  getDate(): string {
    return this.year + '-' + this.month + '-' + this.day;
  }
}
