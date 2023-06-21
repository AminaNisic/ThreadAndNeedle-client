import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogPostRepository {
  private readonly baseUrl = 'https://thread-and-needle-543768a8777c.herokuapp.com/posts';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<any[]>(this.baseUrl);
  }

  updatePost(postId: number, postData: any, accessToken: string) {
    const headers = new HttpHeaders().set('Authorization', accessToken);
    const url = `${this.baseUrl}/editPost/${postId}`;
    return this.http.put<any>(url, postData, { headers });
  }

  deletePost(postId: number, accessToken: string) {
    const headers = new HttpHeaders().set('Authorization', accessToken);
    const url = `${this.baseUrl}/deletePost/${postId}`;
    return this.http.delete(url, { headers });
  }
}
