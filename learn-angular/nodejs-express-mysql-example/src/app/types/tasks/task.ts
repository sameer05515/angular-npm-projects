
export interface TaskToSave{
    description:string;
    title:string;
}

export interface TaskForList{
    id:number;
    title:string;
}

export interface Task extends TaskForList{
    description:string;
    created:Date;
}