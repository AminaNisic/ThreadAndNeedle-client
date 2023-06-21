import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/////for eventual implementation of login information relating to forum posts and comments
@Injectable({
  providedIn: 'root'
})
export class ForumPostRepository {
  private readonly baseUrl = 'https://thread-and-needle-543768a8777c.herokuapp.com/forums/getForums';

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
