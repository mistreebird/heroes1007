export class ngbDate {
  year: number;
  month: number;
  day: number;

  getDate() :string {
    return this.year + '-' + (this.month+1) + '-' + this.day ;
  }
}
