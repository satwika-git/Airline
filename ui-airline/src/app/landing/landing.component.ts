import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
    constructor(private router: Router) {}

  images = [
    'assets/landing1.jpg',
    'assets/landing2.jpg',
    'assets/landing3.jpg'
  ];

  isClicked = false;
  features = [
    {
      icon: '🌍',
      title: 'Global Destinations',
      description: 'Fly to over 1000 destinations worldwide with our extensive network of airline partners.'
    },
    {
      icon: '💰',
      title: 'Best Prices',
      description: 'Get guaranteed best prices with our price match promise and exclusive deals.'
    },
    {
      icon: '🛡️',
      title: 'Secure Booking',
      description: 'Your data is protected with bank-level security and 24/7 customer support.'
    }
  ];

  navigateToAuth() {
    this.isClicked = true;
    setTimeout(() => {
      this.router.navigate(['/staff/home']);
    }, 300);
  }

  onHover(isHovered: boolean) {
    // Add any hover logic if needed
  }

  visibleImages: string[] = [];
  currentIndex = 0;

  ngOnInit(): void {
    this.updateVisibleImages();
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 2) % this.images.length;
      this.updateVisibleImages();
    }, 3000);
  }

  updateVisibleImages(): void {
    this.visibleImages = [
      this.images[this.currentIndex],
      this.images[(this.currentIndex + 1) % this.images.length]
    ];
  }

  goToLogin(): void {
    this.router.navigate(['/user/login']);
  }
}
