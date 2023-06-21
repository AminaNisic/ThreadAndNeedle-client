import { Component } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent {
  forumPost: number[] = [1, 2, 3]; // Initial forum posts

  showMoreForumPosts() {
    for (let i = 0; i < 3; i++) {
      this.forumPost.push(i + 4); // Add new forum post
    }
  }
}
