import { Component, Input,forwardRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  treeNodeName:string=" My tree node name";
  showChildren:boolean=false;

  @Input() treeNodeData:any;

  constructor() { }

  ngOnInit(): void {
  }

  onNodeClick(){
    this.showChildren=!this.showChildren;
    if(this.showChildren){

    }
    //this.treeNodeCreationStatus="Node was created and name is "+this.treeNodeName;
}

}
