import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})
export class PostsComponent implements OnInit {

  private http = inject(HttpClient);

  posts: any[] = [];

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe({
        next: (res) => {
          this.posts = res.slice(0, 12);
        },
        error: (err) => {
          console.log(err);
        }
      });
  }
}