
import { Component, OnInit, Input } from '@angular/core';
import { View } from './../../../interfaces/view.model';

@Component({
  selector: 'app-topic-mgmt-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {

  @Input() viewsData: View[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
