import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  clicked(myDate){
    alert(myDate.date.year + '-' + (myDate.date.month) + '-' + myDate.date.day) ;
  }
}
