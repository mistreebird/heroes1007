import { Component } from '@angular/core';
import { ngbDate } from './ngb-datepicker/ngbDate'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  testDate: ngbDate;
  testDate2: ngbDate;
  title = 'app works!';
  clicked() {
    if (this.testDate == undefined)
      alert('第一個日期尚未選擇！');
    else
      alert('第一個日期:' + this.testDate.getDate());
    if (this.testDate2 == undefined)
      alert('第二個日期尚未選擇！');
    else
      alert('第二個日期:' + this.testDate2.getDate());
  }
}
