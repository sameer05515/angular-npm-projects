
export class TreeNode {
    constructor(public id:number,public parentId:number,
        public title:string,public path:string,
        public children:TreeNode[]=[],public showChildren: boolean=false){

    }
}