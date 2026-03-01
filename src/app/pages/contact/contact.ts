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

  // ==============================
  // Form Model
  // ==============================
  form = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  // ==============================
  // Your Contact Details
  // ==============================
  contactInfo = {
    email: 'vijaydofficial0@gmail.com',
    phone: '6381574367',
    location: 'Chennai, Tamil Nadu, India',

    // 🔗 Social Links
    linkedin: 'https://www.linkedin.com/in/d-vijay-bb7801307?utm_source=share_via&utm_content=profile&utm_medium=member_android',  // update your real link
    github: 'https://github.com/vijay3572',
    instagram: 'https://instagram.com/mr.vijay_official_0'       // 🔥 add your Instagram username
  };

  // WhatsApp number (CountryCode + Number)
  yourWhatsAppNumber = '916381574367';


  // ==============================
  // Build Message Text
  // ==============================
  private buildText(): string {
    return (
      `Name: ${this.form.name}\n` +
      `Email: ${this.form.email}\n` +
      `Subject: ${this.form.subject}\n\n` +
      `Message:\n${this.form.message}`
    );
  }


  // ==============================
  // Send Email
  // ==============================
  sendEmail() {
    const subject = encodeURIComponent(this.form.subject || 'Portfolio Contact');
    const body = encodeURIComponent(this.buildText());

    window.location.href =
      `mailto:${this.contactInfo.email}?subject=${subject}&body=${body}`;
  }


  // ==============================
  // Send WhatsApp
  // ==============================
  sendWhatsApp() {
    const text = encodeURIComponent(this.buildText());

    window.open(
      `https://wa.me/${this.yourWhatsAppNumber}?text=${text}`,
      '_blank'
    );
  }


  // ==============================
  // Default Submit Action
  // ==============================
  submit() {
    // If user presses Enter
    this.sendEmail();
  }

}