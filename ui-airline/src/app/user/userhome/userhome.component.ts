import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss']
})

export class UserHomeComponent {
  searchForm: FormGroup;
  passengerCount = 1;
  minDate: string = new Date().toISOString().split('T')[0];

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      source: ['', Validators.required],
      destination: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  increasePassenger() {
    this.passengerCount++;
  }

  decreasePassenger() {
    if (this.passengerCount > 1) this.passengerCount--;
  }

  onSearch() {
    if (this.searchForm.valid) {
      const data = {
        ...this.searchForm.value,
        passengers: this.passengerCount
      };
      console.log('Searching flights with:', data);
    } else {
      alert('Please fill all fields');
    }
  }
}
