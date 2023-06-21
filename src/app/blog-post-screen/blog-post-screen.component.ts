import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-post-screen',
  templateUrl: './blog-post-screen.component.html',
  styleUrls: ['./blog-post-screen.component.css']
})
export class BlogPostScreenComponent {
  isClicked = false;

  toggleBookmark() {
    this.isClicked = !this.isClicked;
  }
}
