import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-widget',
  templateUrl: './topic-widget.component.html',
  styleUrls: ['./topic-widget.component.css']
})
export class TopicWidgetComponent implements OnInit {

  //src/assets/topic-reponse.json 

  allTopics:any;

  selectedTopicTitle:any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllNodes();
  }

  getAllNodes() {
    // Simple GET request with response type <any>
    

    // this.http
    //   .get<any>(
    //     'http://127.0.0.1:8080/ParentChildRelationsTopics/topics/tree/data'
    //   )
    //   .subscribe((data) => {
    //     this.totalAngularPackages = data.data;
    //     // console.log(data);
    //   });

      this.http.get<any>('./assets/topic-reponse.json').subscribe(data => {
        this.allTopics = data;
        // console.log(data);
    })
  }

  onTopicSelected(topic:any){
    this.selectedTopicTitle=topic;
  }

}
