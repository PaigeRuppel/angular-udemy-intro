import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
      .overFiveClicks {
        background: blue;
        color: white
      }
  `]
})
export class AppComponent {
  name = '';
  buttonClicked = false;
  numberClicks = 0;

  buttonClicks = [];
  
  onButtonClick() {
    this.buttonClicks.push(new Date());
    this.buttonClicked = !this.buttonClicked;
  }
}
