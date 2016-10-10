import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ngb-alert',
  templateUrl: './ngb-alert.component.html',
  styleUrls: ['./ngb-alert.component.css']
})
export class NgbAlertComponent implements OnInit {

  @Input()
  public alert : IAlert;

  constructor() { }

  ngOnInit() {
  }

  public closeAlert(alert: IAlert) {
    this.alert = null ;
  }

}

interface IAlert {
  type: string;
  message: string;
}
