import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { PostsComponent } from '../../components/posts/posts';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, PostsComponent],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css'
})
export class WelcomePageComponent {
  counter = signal(0);

  increment(): void {
    this.counter.update((value) => value + 1);
  }

  decrement(): void {
    this.counter.update((value) => value - 1);
  }

  reset(): void {
    this.counter.set(0);
  }
}
