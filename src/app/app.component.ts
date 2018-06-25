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
  showNeverSettle = false;

  pushDigit(number): void {
    this.digit += number;
  }

  pushDot(): void {
    this.digit += '.';
  }

  clearData(): void {
    this.result = 0;
    this.digit = '';
    this.showNeverSettle = false;
  }

  deleteLastDigit() {
    this.digit = this.digit.slice(0, -1);
  }

  pushSymbol(symbol): void {
    this.digit += symbol;
  }

  showResults(): void {
    if (this.digit == '1+')
      this.showNeverSettle = true;
    this.result = 0;

  }
}
