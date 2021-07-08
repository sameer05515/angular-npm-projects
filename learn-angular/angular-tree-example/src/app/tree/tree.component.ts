import { Component, Input,forwardRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  treeNodeName:string=" My tree node name";

  @Input() treeNodeData:any;

  constructor() { }

  ngOnInit(): void {
  }

}
