export type ConvItem = {
  createdOn: string;
  id: string;
  msgCount: number;
  title: string;
  updatedOn: string;
  messages: Question[];
};

export type Question={
    q:Message;
    ans:Message[]
}

export type Message = {
  id: string;
  content: string;
  convId: string;
  author: string;
  isUserMessage: boolean;
  createdOn: string;
  updatedOn: string;
};
