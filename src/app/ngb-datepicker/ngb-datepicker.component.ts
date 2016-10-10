import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ngbDate } from './ngbDate'
@Component({
  selector: 'app-ngb-datepicker',
  templateUrl: './ngb-datepicker.component.html',
  styleUrls: ['./ngb-datepicker.component.css']
})
export class NgbDatepickerComponent implements OnInit {
  date;

  @Output()
  onChangeDate = new EventEmitter();

  ngOnInit() {
  }

  changeDate(myDate) {
    this.date = myDate ;
    var myngbDate: ngbDate = new ngbDate(this.date.year,this.date.month,this.date.day) ;
    myngbDate.month++;
    this.onChangeDate.emit(myngbDate);
  }
}
