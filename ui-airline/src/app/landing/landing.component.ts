import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  images = [
    'assets/landing1.jpg',
    'assets/landing2.jpg',
    'assets/landing3.jpg'
  ];

  visibleImages: string[] = [];
  currentIndex = 0;

  constructor(private router: Router) {}

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
