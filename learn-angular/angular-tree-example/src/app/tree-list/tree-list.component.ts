import { Component } from "@angular/core";

@Component({
    selector:'app-tree-list',
    templateUrl:'./tree-list.component.html',
    styleUrls:['./tree-list.component.css']
})

export class TreeListComponent{

    allowNewTreeNode:boolean=false;
    treeNodeCreationStatus="No Node created yet";
    treeNodeName:string="";
    treeNodeCreated=false;

    constructor(){
        setTimeout(()=>{
            this.allowNewTreeNode=true;
        },5000);
    }

    onCreateNode(){
        this.treeNodeCreated=true;
        this.treeNodeCreationStatus="Node was created and name is "+this.treeNodeName;
    }

}