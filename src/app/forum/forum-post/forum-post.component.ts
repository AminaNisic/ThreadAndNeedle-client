import { Component, OnInit, Inject  } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Observer {
  update(): void;
}

@Component({
  selector: 'app-forum-post',
  templateUrl: './forum-post.component.html',
  styleUrls: ['./forum-post.component.css']
})
export class ForumPostComponent implements OnInit, Observer {

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
    this.http.get<any[]>('https://thread-and-needle-543768a8777c.herokuapp.com/forums/getForums').subscribe((response: any[]) => {
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
