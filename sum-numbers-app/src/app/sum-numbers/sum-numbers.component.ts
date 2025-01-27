import { Component } from '@angular/core';

@Component({
  selector: 'app-sum-numbers',
  templateUrl: './sum-numbers.component.html',
  styleUrls: ['./sum-numbers.component.css']
})
export class SumNumbersComponent {
  number1: number = 0;
  number2: number = 0;
  result: number | null = null;

  sumNumbers() {
    this.result = this.number1 + this.number2;
  }
}
