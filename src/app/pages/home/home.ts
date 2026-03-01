import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

type Skill = { name: string; icon: string; color: string; };
type HighlightItem = { title: string; badge: string; desc: string; };

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

  fullName = 'Vijay D';
  jobRole = 'Python Full Stack Developer';
  city = 'Chennai, India';

  summary =
    'Aspiring Python Full Stack Developer with strong expertise in Django, REST APIs, Angular, and SQL databases. Passionate about writing clean and scalable code.';

  skills: Skill[] = [
    { name: 'Python', icon: 'bi-filetype-py', color: '#3776AB' },
    { name: 'Django', icon: 'bi-lightning-charge-fill', color: '#092E20' },
    { name: 'Angular', icon: 'bi-triangle-fill', color: '#DD0031' },
    { name: 'JavaScript', icon: 'bi-filetype-js', color: '#F7DF1E' },
    { name: 'HTML5', icon: 'bi-filetype-html', color: '#E34F26' },
    { name: 'CSS3', icon: 'bi-filetype-css', color: '#1572B6' },
    { name: 'PostgreSQL', icon: 'bi-database-fill', color: '#336791' },
    { name: 'MySQL', icon: 'bi-server', color: '#00758F' },
    { name: 'Git', icon: 'bi-git', color: '#F05032' },
    { name: 'GitHub', icon: 'bi-github', color: '#111827' },
  ];

  highlights: HighlightItem[] = [
    {
      title: 'Backend Development',
      badge: 'Django / DRF',
      desc: 'Built REST APIs, CRUD modules, and authentication with Django & Django REST Framework.'
    },
    {
      title: 'Frontend Development',
      badge: 'Angular',
      desc: 'Responsive UI, forms, routing, component-based design, and API integration.'
    },
    {
      title: 'Database & Tools',
      badge: 'SQL + Git',
      desc: 'PostgreSQL/MySQL schema design and version control using Git & GitHub.'
    }
  ];
}