import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-forum-post',
  templateUrl: './add-forum-post.component.html',
  styleUrls: ['./add-forum-post.component.css']
})
export class AddForumPostComponent {
  title: string = '';
  body: string = '';
  titleColor: string = '';
  bodyColor: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  changeTextColor(fieldName: string) {
    switch (fieldName) {
      case 'title':
        this.titleColor = 'darkGreen';
        break;
      case 'body':
        this.bodyColor = 'green';
        break;
    }
  }

  submitForm() {
    // Retrieve the access token from localStorage
   /* const accessToken = localStorage.getItem('accessToken');
  
    // Check if the user is logged in
    if (!accessToken) {
      alert('User not logged in');
      // Handle the error or redirect to the login page
      return;
    }*/
  
    // Set the request headers with the access token
    //const headers = new HttpHeaders().set('Authorization', accessToken);

    // Prepare the post data
    const postData = {
      title: this.title,
      body: this.body,
      username: ""
    };

    // Perform API call to create post endpoint                             //, { headers } after postData
    this.http.post('https://thread-and-needle-543768a8777c.herokuapp.com/forums/createForumPost', postData).subscribe(
      (response) => {
        // Post creation successful
        alert('Post added successfully:');
        this.router.navigate(['/homepage']);

        // Reset form fields
        this.title = '';
        this.body = '';

        // Perform additional actions if needed
      },
      (error) => {
        // Post creation failed
        console.error('Error adding post:', error);
        // Handle the error
      }
    );
  }
}
