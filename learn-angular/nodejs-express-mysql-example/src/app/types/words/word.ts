export interface WordToSave{
    uniqueName:string;
    word:string;
    type:string;
    details:string;
}

export interface WordForList{
    id:number;
    uniqueName:string;
    word:string;
}

export interface Word extends WordForList{
    type:string;
    details:string;
    createdOn:Date;
    updatedOn:Date;
    lastRead:Date;
}