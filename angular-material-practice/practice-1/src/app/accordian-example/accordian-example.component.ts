import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordian-example',
  templateUrl: './accordian-example.component.html',
  styleUrls: ['./accordian-example.component.css']
})
export class AccordianExampleComponent implements OnInit {

  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
