import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-component',
  templateUrl: './topic-component.component.html',
  styleUrls: ['./topic-component.component.css']
})
export class TopicComponentComponent implements OnInit {

  @Input() topic:any;

  constructor() { }

  ngOnInit(): void {
  }

}
