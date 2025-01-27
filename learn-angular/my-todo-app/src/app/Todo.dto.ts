export enum Status {
  OPEN = "Open",
  CLOSED = "Closed",
  UNKNOWN = "Unknown",
}

export const StatusOrder: Record<Status, number> = {
  [Status.OPEN]: 0,
  [Status.CLOSED]: 1,
  [Status.UNKNOWN]: 2,
};

export const ClassSuffixForStatus: Record<Status, string> = {
  [Status.OPEN]: "info",
  [Status.CLOSED]: "success",
  [Status.UNKNOWN]: "warning",
};

export class Todo {
  name: string;
  createdDate: string;
  status: Status;
  closedOn: string;
  isUrgent: boolean;
  isImportant: boolean;
  hasGroomed: boolean;

  constructor(
    name: string,
    createdDate: string,
    status: Status = Status.OPEN,
    closedOn: string = "",
    isUrgent: boolean = false,
    isImportant: boolean = false,
    hasGroomed: boolean = false
  ) {
    this.name = name || "Name Missing!!";
    this.createdDate = createdDate || "";
    this.closedOn = closedOn || "";
    this.status = status || Status.UNKNOWN;
    this.isUrgent = isUrgent;
    this.isImportant = isImportant;
    this.hasGroomed = hasGroomed;
  }

  static fromData(
    name: string,
    createdDate: string,
    status: Status,
    closedOn: string,
    isUrgent: boolean,
    isImportant: boolean,
    hasGroomed: boolean
  ): Todo {
    return new Todo(name, createdDate, status, closedOn, isUrgent, isImportant, hasGroomed);
  }

  static fromObject({
    name = "",
    createdDate = "",
    status = Status.UNKNOWN,
    closedOn = "",
    isUrgent = false,
    isImportant = false,
    hasGroomed = false,
  }: Partial<Todo>): Todo {
    return new Todo(name, createdDate, status, closedOn, isUrgent, isImportant, hasGroomed);
  }
}

type FilterFunction = (todo: Todo) => boolean;

const defaultFilterFn: FilterFunction = (todo) => todo.status !== Status.CLOSED;

export const getFilteredTodos = (todos: Todo[] = [], filterFn: FilterFunction = defaultFilterFn): Todo[] =>
  todos.filter((todo) => filterFn?.(todo));

export function sortTodosByKey(
  todos: Todo[],
  key: keyof Todo,
  ascending: boolean = true
): Todo[] {
  return todos.slice().sort((a, b) => {
    if (a[key] < b[key]) return ascending ? -1 : 1;
    if (a[key] > b[key]) return ascending ? 1 : -1;
    return 0;
  });
}

export function sortTodosByCreatedDate(todos: Todo[], ascending: boolean = true): Todo[] {
  return todos.slice().sort((a, b) => {
    const dateA = new Date(a.createdDate).getTime();
    const dateB = new Date(b.createdDate).getTime();
    return ascending ? dateA - dateB : dateB - dateA;
  });
}

export function sortTodosByClosedOnDate(todos: Todo[], ascending: boolean = true): Todo[] {
  return todos.slice().sort((a, b) => {
    const dateA = a.closedOn ? new Date(a.closedOn).getTime() : 0;
    const dateB = b.closedOn ? new Date(b.closedOn).getTime() : 0;
    return ascending ? dateA - dateB : dateB - dateA;
  });
}

export function sortTodosByUrgencyAndImportance(todos: Todo[]): Todo[] {
  return todos.slice().sort((a, b) => {
    if (a.isUrgent !== b.isUrgent) return Number(b.isUrgent) - Number(a.isUrgent);
    if (a.isImportant !== b.isImportant) return Number(b.isImportant) - Number(a.isImportant);
    return 0;
  });
}

export function sortTodosByGroomed(todos: Todo[]): Todo[] {
  return todos.slice().sort((a, b) => {
    if (a.hasGroomed !== b.hasGroomed) return Number(b.hasGroomed) - Number(a.hasGroomed);
    return 0;
  });
}

export function sortTodosByStatus(todos: Todo[], statusOrder: Record<Status, number> = StatusOrder): Todo[] {
  return todos.slice().sort((a, b) => {
    const statusA = statusOrder[a.status] ?? Number.MAX_VALUE;
    const statusB = statusOrder[b.status] ?? Number.MAX_VALUE;
    return statusA - statusB;
  });
}
