import { Component, OnInit, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-ngb-datepicker',
  templateUrl: './ngb-datepicker.component.html',
  styleUrls: ['./ngb-datepicker.component.css']
})
export class NgbDatepickerComponent implements OnInit {
  date ;

  @Output()
  onChangeDate = new EventEmitter() ;

  ngOnInit() {
  }

  changeDate(myDate){
    this.date = myDate ;
    myDate.month ++ ;

    this.onChangeDate.emit(myDate) ;
  }
}
