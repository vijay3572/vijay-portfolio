import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

type Skill = { name: string; icon: string; color: string };
type Highlight = { title: string; badge: string; desc: string };

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

  fullName = 'Vijay D';
  jobRole = 'Python Full Stack Developer';
  city = 'Chennai, India';

  summary =
    'Aspiring Python Full Stack Developer with strong expertise in Django, REST APIs, Angular, and SQL databases. Passionate about writing clean and scalable code.';

  // ✅ Skills (icons super + 4 per row)
  skills = [
  { name: 'Python', icon: 'bi-filetype-py', color: '#2563eb' },
  { name: 'Django', icon: 'bi-lightning-charge-fill', color: '#16a34a' },
  { name: 'Angular', icon: 'bi-triangle-fill', color: '#ef4444' },
  { name: 'JavaScript', icon: 'bi-filetype-js', color: '#f59e0b' },
  { name: 'HTML5', icon: 'bi-filetype-html', color: '#ea580c' },
  { name: 'CSS3', icon: 'bi-filetype-css', color: '#2563eb' },
  { name: 'PostgreSQL', icon: 'bi-database-fill', color: '#0f172a' },
  { name: 'MySQL', icon: 'bi-database', color: '#0f766e' },

  /* ✅ Basics */
  { name: 'Git (Basic)', icon: 'bi-git', color: '#ef4444' },
  { name: 'GitHub (Basic)', icon: 'bi-github', color: '#111827' },
  { name: 'Bootstrap (Basic)', icon: 'bi-bootstrap-fill', color: '#7c3aed' },
  { name: 'REST API (Basic)', icon: 'bi-braces', color: '#2563eb' }
];

  highlights: Highlight[] = [
    { title: 'Django + REST APIs', badge: 'Backend', desc: 'CRUD modules, authentication, and clean API structure.' },
    { title: 'Angular UI', badge: 'Frontend', desc: 'Responsive UI pages with routing and reusable components.' },
    { title: 'SQL Databases', badge: 'Data', desc: 'PostgreSQL / MySQL schema and data handling.' }
  ];
}