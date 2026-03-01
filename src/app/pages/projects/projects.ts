import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Project = {
  title: string;
  stack: string;
  desc: string;
  status: 'Completed' | 'In Progress';
  points: string[];
  tags: string[];
  github?: string;
  demo?: string;
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Smart Accident Forecasting & Reporting System',
      desc: 'Web-based accident reporting and monitoring system with location search and structured database storage.',
      stack: 'Python • Django • HTML • CSS • JavaScript • Bootstrap • PostgreSQL',
      status: 'Completed',
      github: 'https://github.com/vijay3572/smart-accident-system',
      demo: 'https://smart-accident-demo.netlify.app',
      tags: ['Authentication', 'Location Search', 'Media Upload', 'Database'],
      points: [
        'Built signup/login with dashboard navigation.',
        'Created accident report form with image/video upload.',
        'Integrated PostgreSQL for report storage.',
        'Implemented location-based search functionality.',
        'Designed admin-only feedback module.'
      ]
    },
    {
      title: 'Daily Product Delivery Web Application',
      desc: 'Frontend e-commerce application with cart management, delivery scheduling, and tracking workflow.',
      stack: 'HTML • CSS • PHP',
      status: 'Completed',
      github: 'https://github.com/vijay3572/daily-delivery',
      demo: 'https://daily-delivery-demo.netlify.app',
      tags: ['E-commerce UI', 'Cart Management', 'Order Workflow', 'Tracking System'],
      points: [
        'Designed signup/login flow with dashboard navigation.',
        'Implemented product listing and Add-to-Cart functionality.',
        'Built cart management with quantity control.',
        'Created delivery scheduling and payment interface.',
        'Developed order confirmation and tracking ID feature.'
      ]
    },
    {
      title: 'Personal Portfolio Website',
      desc: 'Modern Angular portfolio with routing, responsive layout, resume download and clean UI design.',
      stack: 'Angular • TypeScript • CSS',
      status: 'Completed',
      github: 'https://github.com/vijay3572/vijay_portfolio',
      demo: 'https://vijay-portfolio.netlify.app',
      tags: ['Angular', 'TypeScript', 'Responsive UI'],
      points: [
        'Implemented standalone Angular components.',
        'Added routing and page structure.',
        'Designed fully responsive layout.',
        'Integrated resume download and contact workflow.',
        'Deployed using Netlify.'
      ]
    }
  ];
}