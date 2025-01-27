import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'; // <-- Import here
import {
  Status,
  getFilteredTodos,
  sortTodosByGroomed,
  sortTodosByUrgencyAndImportance,
  sortTodosByStatus,
  ClassSuffixForStatus,
  Todo,
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
  standalone: false,
})
export class TodoComponent {
  filterActionTypes = {
    SHOW_ALL: 'show-all',
    SHOW_OPEN_ONLY: 'show-open-only',
    SHOW_CLOSED_ONLY: 'show-closed-only',
  };

  filterActions = {
    [this.filterActionTypes.SHOW_ALL]: () => true,
    [this.filterActionTypes.SHOW_OPEN_ONLY]: (todo: Todo) =>
      todo.status === Status.OPEN,
    [this.filterActionTypes.SHOW_CLOSED_ONLY]: (todo: Todo) =>
      todo.status === Status.CLOSED,
  };

  todos = pipe(
    sortTodosByGroomed,
    sortTodosByUrgencyAndImportance,
    sortTodosByStatus
  )(myTodos);

  constructor(private sanitizer: DomSanitizer) {} // <-- Inject DomSanitizer

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

  // Method to sanitize and render raw HTML content
  getSanitizedHtml(todoName: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(todoName);
  }
}
