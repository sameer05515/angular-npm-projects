import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,PostsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  counter = signal(0);

  increment() {
    this.counter.update(v => v + 1);
  }

  decrement() {
    this.counter.update(v => v - 1);
  }

  reset() {
    this.counter.set(0);
  }
}