import { Component, Input,forwardRef, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  treeNodeName:string=" My tree node name";
  showChildren:boolean=false;

  @Output() nodeSelected=new EventEmitter<string>();

  @Input() treeNodeData:any;

  constructor() { }

  ngOnInit(): void {
  }

  onNodeClick(){
    this.showChildren=!this.showChildren;
    console.log("Selected one : "+this.treeNodeData.title);
    this.nodeSelected.emit(this.treeNodeData.title);
    if(this.showChildren){

    }
    //this.treeNodeCreationStatus="Node was created and name is "+this.treeNodeName;
}

}
