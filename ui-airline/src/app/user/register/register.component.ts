import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      role: ['user', Validators.required], // default: user
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      airline: [''] // Optional — only for staff
    });
  }
  get isStaff() {
    return this.registerForm.get('role')?.value === 'staff';
  }
  onSubmit() {
    if (this.registerForm.valid) {
      const data = this.registerForm.value;
      console.log('Register data:', data);
      // TODO: Send to backend
    }
  }
}



