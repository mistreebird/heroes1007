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

  ngOnInit() {
    if (this.myngbDate != null) {
      this.date = { 'year': this.myngbDate.year, 'month': this.myngbDate.month - 1, 'day': this.myngbDate.day };
      setTimeout("alert('你是神！你指定日期為" + this.myngbDate.toDateString() + "');" + this.myngbDate.hours, 500);
    }
  }

  changeDate(myDate) {
    this.date = myDate;
    this.myngbDate.year = this.date.year;
    this.myngbDate.month = (this.date.month + 1);
    this.myngbDate.day = this.date.day;
  }

  changeHour(Hours: number) {
    this.myngbDate.hours = Hours;
  }

  changeMinute(Minutes: number) {
    this.myngbDate.minutes = Minutes;
  }
}
