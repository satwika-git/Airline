import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/auth.service'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-staffhome',
  templateUrl: './staffhome.component.html',
  styleUrls: ['./staffhome.component.scss']
})
export class StaffhomeComponent {
  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {
    this.staffUserId = Number(localStorage.getItem('userId'));
  }
  activeForm: string | null = null;

  flightData = {
    flightCode: '',
    airlineId: '',
    departureId: '',
    arrivalId: '',
    aircraftType: ''
  };
  staffUserId: number;
  // showForm = false;
  locations = [
    { id: 1, code: 'DEL', name: 'DELHI'},
    { id: 2, code: 'BOM', name: 'Mumbai' },
    { id: 3, code: 'BLR', name: 'Bangalore' },
    { id: 4, code: 'HYD', name: 'Hyderabad' },
    { id: 5, code: 'CCU', name: 'Kolkata' }
  ];

  locationData = {
    id: '',
    code: '',
    name: '',
    city: '',
    country: '',
  };

  scheduleData = {
    id: '',
    flightId: '',
    departureDateTime: '',
    arrivalDateTime: '',
    Duration: '',
    flightStatus: '',
  };

  addFlight() {
    const url = `http://localhost:8080/api/v1/flights/add?userId=${this.staffUserId}`;

    this.http.post(url, this.flightData).subscribe({
      next: () => alert('Flight added successfully!'),
      error: (err) => alert('Error adding flight: ' + err.message)
    });
  }

  addLocation() {
    console.log("Add Location form submitted");
    // Call backend API here
  }

  addSchedule() {
    console.log("Add Schedule form submitted");
    // Call backend API here
  }

  
  showForm(formType: string) {
    this.activeForm = formType;
  }
  
  resetForms() {
    this.flightData = { flightCode: '', airlineId: '', departureId: '', arrivalId: '', aircraftType: '' };
    this.scheduleData = { id: '', flightId: '', departureDateTime: '', arrivalDateTime: '', Duration: '', flightStatus: ''};
    this.locationData = { id: '', code: '', name: '', city: '', country: ''};
  }
  hideForm() {
    this.activeForm = null;
    this.resetForms();
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
  
}
