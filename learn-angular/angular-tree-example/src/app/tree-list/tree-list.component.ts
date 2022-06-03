import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TreeApiResponse } from '../shared/tree-api-response.model';
import { TreeNode } from '../shared/tree-node.model';

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
  treeList: TreeNode[]=[];
  selectedNode:string="";

  constructor(private http: HttpClient) {
    setTimeout(() => {
      this.allowNewTreeNode = true;
    }, 5000);
  } 

  ngOnInit() {
    
    this.getAllNodes();
  }

  getAllNodes() {
    this.http.get<TreeApiResponse>('./assets/tree-response.json').subscribe(response => {
        this.treeList = <TreeNode[]>response.data;
        console.log(this.treeList);
    });

    // this.http
    //   .get<TreeApiResponse>(
    //     'http://127.0.0.1:8080/ParentChildRelationsTopics/topics/tree/data'
    //   )
    //   .subscribe((response) => {
    //     this.treeList = response.data;
    //     // console.log(response);
    //   });
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

  // onNodeSelected(title:string){
  //   console.log("Selected Node : "+title)
  //   this.selectedNode=title;
  // }
}
