import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;
  loginError: boolean;

  constructor(private router: Router, private http: HttpClient) {
    this.email = '';
    this.password = '';
    this.loginError = false;
  }

  login() {
    // Perform login logic here
    if (this.email && this.password) {
      // Clear login error
      this.loginError = false;

      // Perform API call to login endpoint
      const loginData = { email: this.email, password: this.password };
      this.http.post('https://thread-and-needle-543768a8777c.herokuapp.com/auth/login', loginData).subscribe(
        (response: any) => {
          // Login successful
          console.log('Login successful:', response);

          // Reset form fields
          this.email = '';
          this.password = '';

          // Store the access token in localStorage
          localStorage.setItem('accessToken', 'Bearer ' + response);

          // Navigate to the desired route upon successful login
          this.router.navigate(['/homepage']);
        },
        (error) => {
          // Login failed
          alert('Login failed:');
          this.loginError = true;
        }
      );
    } else {
      // Show login error message
      this.loginError = true;
    }
  }
}
