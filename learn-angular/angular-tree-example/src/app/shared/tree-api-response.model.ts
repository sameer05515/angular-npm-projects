// import { TreeNode } from "./tree-node.model";

export class TreeApiResponse{
    constructor(public isError:boolean,public data:any,public message:string,
        public timestamp:Date,public status:number){}
}