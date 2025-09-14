import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Step1DataRenderer } from './components/step1-data-renderer/step1-data-renderer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Step1DataRenderer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app-14-sep-25');
}
