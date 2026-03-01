import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent {

  name = 'Vijay D';
  role = 'Python Full Stack Developer';

  summary =
    "Aspiring Python Full Stack Developer with strong knowledge in Django, REST APIs, Angular and SQL databases. Passionate about building scalable web applications and writing clean, maintainable code.";

  /* 🔥 Current Internship */
  internship = {
    role: 'Python Full Stack Developer Intern',
    company: 'Femtosoft',
    duration: 'Present',
    description: [
      'Working on Angular UI development and API integration',
      'Developing backend modules using Django & Django REST Framework',
      'Implementing CRUD operations with PostgreSQL',
      'Using Git for version control and collaboration'
    ]
  };

  education = [
    {
      degree: 'BCA — Bachelor of Computer Applications',
      college: 'Prince Shri Venkateshwara Arts & Science College',
      university: 'University of Madras',
      time: '2022 – 2025',
      cgpa: 'CGPA 8.0',
      desc: 'Focused on programming, database concepts and web application development.'
    }
  ];

  certifications = [
    'Python Full Stack Development — Completed (12/2025)',
    'Cloud Computing — Swayam NPTEL (10/2024)',
    'MongoDB Database Admin Path — Naan Mudhalvan (02/2025)',
    'Oracle Cloud Infrastructure 2023 Certified (03/2024)'
  ];
}