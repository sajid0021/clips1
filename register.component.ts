import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormGroup, FormControl}from '@angular/forms'

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm = new FormGroup({
name: new FormControl(''),
email: new FormControl(''),
age: new FormControl(''),
password: new FormControl(''),
confirm_password: new FormControl(''),
phoneNumber: new FormControl('')

  })
}
 
