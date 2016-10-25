import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgbTimeStruct,NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { ngbDate } from './ngbDate'
@Component({
  selector: 'app-ngb-datepicker',
  templateUrl: './ngb-datepicker.component.html',
  styleUrls: ['./ngb-datepicker.component.css']
})
export class NgbDatepickerComponent implements OnInit {
  date : NgbDateStruct;
  time : NgbTimeStruct ;

  @Input()
  myngbDate : ngbDate ;

  @Output()
  onChangeDate = new EventEmitter();

  ngOnInit() {
    this.time = {hour: 13, minute: 30,second: 0};
  if (this.myngbDate != null)
    {
      this.date = {'year':this.myngbDate.year,'month':this.myngbDate.month - 1,'day':this.myngbDate.day} ;
      setTimeout("alert('你是神！你指定日期為" + this.myngbDate.toDateString() + "');",500);
    }
  }

  changeDate(myDate) {
    this.date = myDate ;
    alert(this.myngbDate.bHaveTime) ;
    if (this.myngbDate.bHaveTime)
      this.myngbDate = new ngbDate(this.date.year, (this.date.month + 1), this.date.day,12,0);
    else
      this.myngbDate = new ngbDate(this.date.year, (this.date.month + 1), this.date.day);
      alert(this.myngbDate.bHaveTime) ;
    this.onChangeDate.emit(this.myngbDate);
  }
}
