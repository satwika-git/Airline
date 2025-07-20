import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
@Component({
  selector: 'app-staffhome',
  templateUrl: './staffhome.component.html',
  styleUrls: ['./staffhome.component.scss']
})
export class StaffhomeComponent {
  constructor(private http: HttpClient) {
    this.staffUserId = Number(localStorage.getItem('userId'));
  }

  flight = {
    flightCode: '',
    airlineId: null,
    departureId: null,
    arrivalId: null,
    aircraftType: ''
  };
  staffUserId: number;
  showForm = false;
  locations = [
    { id: 1, name: 'Delhi (DEL)' },
    { id: 2, name: 'Mumbai (BOM)' },
    { id: 3, name: 'Bangalore (BLR)' },
    { id: 4, name: 'Hyderabad (HYD)' },
    { id: 5, name: 'Kolkata (CCU)' }
  ];

  addFlight() {
    const url = `http://localhost:8080/api/v1/flights/add?userId=${this.staffUserId}`;

    this.http.post(url, this.flight).subscribe({
      next: () => alert('Flight added successfully!'),
      error: (err) => alert('Error adding flight: ' + err.message)
    });
  }
  resetForm() {
    this.flight = {
      flightCode: '',
      airlineId: null,
      departureId: null,
      arrivalId: null,
      aircraftType: ''
    };
  }
  

}
