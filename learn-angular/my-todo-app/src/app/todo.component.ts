// todo.component.ts
import { Component } from '@angular/core';
import {
  Status,
  getFilteredTodos,
  sortTodosByGroomed,
  sortTodosByUrgencyAndImportance,
  sortTodosByStatus,
  ClassSuffixForStatus,
} from './Todo.dto';

import { myTodos } from './data';

const pipe =
  <T>(...fns: Array<(arg: T) => T>) =>
  (arg: T): T =>
    fns.reduce((acc, fn) => fn(acc), arg);


export default pipe;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
//   styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  filterActionTypes = {
    SHOW_ALL: 'show-all',
    SHOW_OPEN_ONLY: 'show-open-only',
    SHOW_CLOSED_ONLY: 'show-closed-only',
  };

  filterActions = {
    [this.filterActionTypes.SHOW_ALL]: () => true,
    [this.filterActionTypes.SHOW_OPEN_ONLY]: (todo: any) =>
      todo.status === Status.OPEN,
    [this.filterActionTypes.SHOW_CLOSED_ONLY]: (todo: any) =>
      todo.status === Status.CLOSED,
  };

  todos = pipe(
    sortTodosByGroomed,
    sortTodosByUrgencyAndImportance,
    sortTodosByStatus
  )(myTodos);

  handleFilterChange(
    actionType: string = this.filterActionTypes.SHOW_ALL
  ): void {
    this.todos = pipe(
      (todos: any) => getFilteredTodos(todos, this.filterActions[actionType]),
      sortTodosByGroomed,
      sortTodosByUrgencyAndImportance,
      sortTodosByStatus
    )(myTodos);
  }
}
