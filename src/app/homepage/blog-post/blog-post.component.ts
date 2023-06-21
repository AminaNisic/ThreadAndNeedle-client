import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Observer {
  update(): void;
}

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})

export class BlogPostComponent implements OnInit, Observer {
  posts: any[] = [];
  isDataFetched: boolean = false;
  observers: Observer[] = []; // List of observers

  editPostData: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
    if (!this.isDataFetched) {
      this.fetchPosts();
    }
  }

  fetchPosts() {
    this.http.get<any[]>('https://thread-and-needle-543768a8777c.herokuapp.com/posts').subscribe((response: any[]) => {
      this.posts = response.map(post => ({
        ...post,
        image: this.getRandomImageURL()
      }));
      this.isDataFetched = true;
      this.notifyObservers(); // Notify observers after fetching posts
    });
  }

  getRandomImageURL(): string {
    const randomNum = Math.floor(Math.random() * 1000) + 1;
    return `https://picsum.photos/500/300?random=${randomNum}`;
  }

  openEditForm(post: any) {
    this.editPostData = { ...post };
  }

  submitEditPostForm() {
    const postId = this.editPostData.id;

    // Retrieve the access token from localStorage
    const accessToken = localStorage.getItem('accessToken');

    // Check if the user is logged in
    if (!accessToken) {
      alert('User not logged in');
      // Handle the error or redirect to the login page
      return;
    }

    // Set the request headers with the access token
    const headers = new HttpHeaders().set('Authorization', accessToken);

    // Make the HTTP PUT request to update the post
    this.http
      .put<any>(`https://thread-and-needle-543768a8777c.herokuapp.com/posts/editPost/${postId}`, this.editPostData, { headers })
      .subscribe(
        (response) => {
          // Post updated successfully, handle the response as needed
          alert('Post updated');
          this.editPostData = {}; // Reset the editPostData
          this.fetchPosts(); // Fetch posts after successful update
        },
        (error) => {
          // Error occurred while updating the post, handle the error as needed
          alert("You can only edit posts you have posted.");
        }
      );
  }

  deletePost(postId: number) {
    // Retrieve the access token from localStorage
    const accessToken = localStorage.getItem('accessToken');

    // Check if the user is logged in
    if (!accessToken) {
      alert('User not logged in');
      // Handle the error or redirect to the login page
      return;
    }

    // Set the request headers with the access token
    const headers = new HttpHeaders().set('Authorization', accessToken);

    // Make the HTTP DELETE request to delete the post
    this.http
      .delete(`https://thread-and-needle-543768a8777c.herokuapp.com/posts/deletePost/${postId}`, { headers })
      .subscribe(
        () => {
          // Post deleted successfully, handle the response as needed
          console.log('Post deleted');
          this.fetchPosts(); // Fetch posts after successful deletion
        },
        (error) => {
          // Error occurred while deleting the post, handle the error as needed
          alert("You can only delete posts you have posted.");
        }
      );
  }

  // Observer pattern implementation
  registerObserver(observer: Observer) {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers() {
    for (const observer of this.observers) {
      observer.update();
    }
  }

  update() {
    // This method is called when the subject notifies observers
    alert('Post updated');
  }
}
