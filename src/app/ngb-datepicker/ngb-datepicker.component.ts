import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbTimeStruct, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ngbDate } from './ngbDate';
import { common } from '../common';
@Component({
  selector: 'app-ngb-datepicker',
  templateUrl: './ngb-datepicker.component.html',
  styleUrls: ['./ngb-datepicker.component.css']
})
export class NgbDatepickerComponent implements OnInit {
  date: NgbDateStruct;

  @Input()
  myngbDate: ngbDate;

  @Output()
  onChangeDate = new EventEmitter();

  //HoursArray: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  HoursArray: number[] = [0, 1];
  MinutesArray: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
    , 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];


  ngOnInit() {
    if (this.myngbDate != null) {
      this.date = { 'year': this.myngbDate.year, 'month': this.myngbDate.month - 1, 'day': this.myngbDate.day };
      setTimeout("alert('你是神！你指定日期為" + this.myngbDate.toDateString() + "');" + this.myngbDate.hours, 500);
    }

    common.leftPad(0, 2, '0');
  }

  changeDate(myDate) {
    this.date = myDate;
    this.myngbDate.year = this.date.year;
    this.myngbDate.month = (this.date.month + 1);
    this.myngbDate.day = this.date.day;

    alert('changeDate');
    this.onChangeDate.emit(this.myngbDate);
  }

  changeHour(Hours: number) {
    this.myngbDate.hours = Hours;

    this.onChangeDate.emit(this.myngbDate);
  }

  changeMinute(Minutes: number) {
    this.myngbDate.minutes = Minutes;

    this.onChangeDate.emit(this.myngbDate);
  }

  leftPad0(str, len): string {
    return common.leftPad(str, len, '0');
  }
}
