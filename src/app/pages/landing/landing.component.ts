import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  features = [
    { icon: '🥘', title: 'Diverse Recipes', description: 'Explore thousands of recipes from around the world' },
    { icon: '📱', title: 'Easy to Follow', description: 'Step-by-step instructions with video guides' },
    { icon: '🏆', title: 'Community Rated', description: 'Real reviews from our cooking community' }
  ];
}
