import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  result = 0;
  digit = '' ;

  pushDigit(number): void {
    this.digit += number;
  }

  pushDot(): void {
    this.digit += '.';
  }

  clearData(): void {
    this.result = 0;
    this.digit = '';
  }

  deleteLastDigit() {
    this.digit = this.digit.slice(0, -1);
  }
}
