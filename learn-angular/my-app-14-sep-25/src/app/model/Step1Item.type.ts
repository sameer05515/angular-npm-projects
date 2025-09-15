export type Step1Item = {
  id: string;
  slug: string;
  order: number;
  location: string;
  isLatest: boolean;
  createdOn: string;
  createdBy: string;
  convCount: number;
  totalMsgCount: number;
};

export type Step1Data={
  step1: Step1Item[]
}
