import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {

  // Form model
  form = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  // Your contact details (edit links)
  contactInfo = {
    email: 'vijaydofficial0@gmail.com',
    phone: '6381574367',
    location: 'Chennai, Tamil Nadu, India',
    linkedin: 'https://www.linkedin.com/in/your-profile',
    github: 'https://github.com/vijay3572'
  };

  // WhatsApp number: CountryCode + Number (India 91)
  yourWhatsAppNumber = '916381574367';

  private buildText(): string {
    return (
      `Name: ${this.form.name}\n` +
      `Email: ${this.form.email}\n` +
      `Subject: ${this.form.subject}\n\n` +
      `Message:\n${this.form.message}`
    );
  }

  // Open email app with prefilled content
  sendEmail() {
    const subject = encodeURIComponent(this.form.subject || 'Portfolio Contact');
    const body = encodeURIComponent(this.buildText());
    window.location.href = `mailto:${this.contactInfo.email}?subject=${subject}&body=${body}`;
  }

  // Open WhatsApp with prefilled message
  sendWhatsApp() {
    const text = encodeURIComponent(this.buildText());
    window.open(`https://wa.me/${this.yourWhatsAppNumber}?text=${text}`, '_blank');
  }

  // Keep this to prevent ngSubmit error
  submit() {
    // optional: default action if user presses Enter
    this.sendEmail();
  }
}