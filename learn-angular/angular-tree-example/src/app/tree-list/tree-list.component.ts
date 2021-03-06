import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.css'],
})
export class TreeListComponent implements OnInit {
  allowNewTreeNode: boolean = false;
  treeNodeCreationStatus = 'No Node created yet';
  treeNodeName: string = '';
  treeNodeParentId: number = 0;
  treeNodeCreated = false;
  totalAngularPackages: any;
  selectedNode:string="";

  constructor(private http: HttpClient) {
    setTimeout(() => {
      this.allowNewTreeNode = true;
    }, 5000);
  }

  // onNodeSelected(title:string){
  //   console.log("Selected Node : "+title)
  //   this.selectedNode=title;

  // }

  ngOnInit() {
    // Simple GET request with response type <any>
    // this.http.get<any>('http://127.0.0.1:8080/ParentChildRelationsTopics/topics/tree/data').subscribe(data => {
    //     this.totalAngularPackages = data.data;
    //     // console.log(data);
    // })

    // this.http.get<any>('./assets/tree-response.json').subscribe(data => {
    //     this.totalAngularPackages = data.data;
    //     // console.log(data);
    // })

    this.getAllNodes();
  }

  getAllNodes() {
    // Simple GET request with response type <any>
    // this.http.get<any>('http://127.0.0.1:8080/ParentChildRelationsTopics/topics/tree/data').subscribe(data => {
    //     this.totalAngularPackages = data.data;
    //     // console.log(data);
    // })

    this.http
      .get<any>(
        'http://127.0.0.1:8080/ParentChildRelationsTopics/topics/tree/data'
      )
      .subscribe((data) => {
        this.totalAngularPackages = data.data;
        // console.log(data);
      });
  }

  onCreateNode() {
    // this.treeNodeCreated=true;
    // this.treeNodeCreationStatus="Node was created and name is "+this.treeNodeName;

    this.http
      .post<any>(
        'http://127.0.0.1:8080/ParentChildRelationsTopics/topics/tree/data',
        { title: this.treeNodeName, parentId: this.treeNodeParentId }
      )
      .subscribe((data) => {
        this.treeNodeCreated = true;
        this.treeNodeCreationStatus =
          'Node was created and name is ' + this.treeNodeName;
        this.getAllNodes();
      });
  }
}
