import { View } from './../../../../interfaces/view.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topic-mgmt-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input('data') viewInput: View;

  constructor() { }

  ngOnInit(): void {
  }

}
