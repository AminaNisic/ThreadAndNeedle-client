import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  blogPosts: number[] = [1]; // Initial blog posts
  hasMorePosts: boolean = true;
  isFetchingPosts: boolean = false;

  showMoreBlogPosts() {
    if (this.isFetchingPosts) {
      return;
    }

    this.isFetchingPosts = true;

    // Simulating an asynchronous HTTP request
    setTimeout(() => {
      const newPosts = [];
      for (let i = 0; i < 1; i++) {
        newPosts.push(this.blogPosts.length + i + 1);
      }
      this.blogPosts = this.blogPosts.concat(newPosts);
      this.hasMorePosts = false;
      this.isFetchingPosts = false;
    }, 1000);
  }
}
