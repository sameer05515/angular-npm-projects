import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  @Input() topicList:any;

  @Output() topicWasSelected=new EventEmitter<any>();
  selectedTopic:any;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(topic:any){
    this.selectedTopic=topic;
    this.topicWasSelected.emit(topic);
  }

}
