import { Component, OnInit } from '@angular/core';
import { ngbDate } from './ngb-datepicker/ngbDate'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  testDate: ngbDate;
  testDate2: ngbDate;
  title = 'app works!';

  ngOnInit() {
    var dateTemp: Date = new Date(2016, 8, 1,14,30,0,0);
    this.testDate2 = new ngbDate(dateTemp);
    this.testDate = new ngbDate(2016, 10, 15);
  }

  clicked() {
    if (this.testDate == undefined)
      alert('第一個日期尚未選擇！');
    else
      alert('第一個日期:' + this.testDate.toDateString());
    if (this.testDate2 == undefined)
      alert('第二個日期尚未選擇！');
    else
      alert('第二個日期:' + this.testDate2.toDateString());
  }
}
