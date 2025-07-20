import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-home',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss'] // or .css if using CSS
})
export class UserHomeComponent implements OnInit {

  searchForm: FormGroup;
  locations = [
    { code: 'DEL', name: 'Delhi' },
    { code: 'BLR', name: 'Bangalore' },
    { code: 'HYD', name: 'Hyderabad' },
    { code: 'MAA', name: 'Chennai' },
    { code: 'BOM', name: 'Mumbai' }
  ];
  minDate: string = '';

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      source: [''],
      destination: [''],
      date: [''],
      passengers: [1]
    });
  }

  ngOnInit(): void {
    this.setMinDate();
  }

  setMinDate() {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  }

  onSearch() {
    console.log(this.searchForm.value);
    // Add API logic here
  }
}



// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-user-home',
//   templateUrl: './userhome.component.html',
//   styleUrls: ['./userhome.component.scss']
// })
// export class UserHomeComponent implements OnInit {

//   searchForm: FormGroup;
//   locations: any[] = [];
//   minDate: string = '';

//   constructor(private fb: FormBuilder, private http: HttpClient) {
//     this.searchForm = this.fb.group({
//       source: [''],
//       destination: [''],
//       date: [''],
//       passengers: [1]
//     });
//   }

//   ngOnInit(): void {
//     this.setMinDate();
//     this.getLocations();
//   }

//   setMinDate() {
//     const today = new Date();
//     this.minDate = today.toISOString().split('T')[0];
//   }

//   getLocations() {
//     this.http.get<any[]>('/api/locations').subscribe((data) => {
//       this.locations = data;
//     });
//   }

//   onSearch() {
//     console.log(this.searchForm.value);
//     // Add API call here if needed
//   }
// }
