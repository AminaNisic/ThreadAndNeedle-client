import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

class ValidationService {
  private static instance: ValidationService;
  private emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  private constructor() {}

  static getInstance(): ValidationService {
    if (!ValidationService.instance) {
      ValidationService.instance = new ValidationService();
    }
    return ValidationService.instance;
  }

  validate(userData: any): { valid: boolean; message?: string } {
    console.log(userData)
    // Check if all fields are filled
    if (!userData.username || !userData.email) {
      return { valid: false, message: 'All fields are required' };
    }

    // Check email format using regex
    if (!this.emailRegex.test(userData.email)) {
      return { valid: false, message: 'Email format is not valid' };
    }

    return { valid: true };
  }
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  userData: any = {
    username: '',
    password: '',
    email: ''
  };
  validationMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    const validationService = ValidationService.getInstance();
    const validation = validationService.validate(this.userData);
    if (!validation.valid) {
      this.validationMessage = validation.message || '';
      return;
    }

    // Send a POST request to the server with the user data
    this.http.post('https://thread-and-needle-543768a8777c.herokuapp.com/auth/register', this.userData).subscribe(
      (response: any) => {
        // Registration successful, handle the response
        alert('Registration successful');
        this.router.navigate(['/login']);
      },
      (error) => {
        // Registration failed, handle the error
        alert('Registration failed');
      }
    );
  }
}
