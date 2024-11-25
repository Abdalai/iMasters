import React from 'react';
import "../styles/contactform.css";



export default function ContactForm() {
    return (
        <div>
            <section class="contact-section">
                <div class="contact-intro">
                    <h2 class="contact-title">Get in Touch</h2>
                    <p class="contact-description">
                    Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                </div>

                <form class="contact-form" action="https://api.web3forms.com/submit" method="POST">

                    <input type="hidden" name="access_key" value="c999bb22-bed5-44c7-9fc4-1174d67f0ebf"/>
                    <input type="hidden" name="subject" value="New Contact Form Submission from iMasters" />
                    <input type="hidden" name="from_name" value="iMasters" />


                    <div class="form-group-container">
                    <div class="form-group">
                        <label for="name" class="form-label">Name</label>
                        <input id="name" name="name" class="form-input" placeholder="Your name" type="text" required/>
                    </div>
                    <div class="form-group">
                        <label for="email" class="form-label">Email</label>
                        <input id="email" name="email" class="form-input" placeholder="Your email" type="email" required/>
                    </div>
                    <div class="form-group">
                        <label for="phone" class="form-label">Phone</label>
                        <input id="phone" name="phone" class="form-input" placeholder="Your phone number" type="text"  />
                    </div>
                    <div class="form-group">
                        <label for="message" class="form-label">Message</label>
                        <textarea class="form-textarea" id="message" name="message" placeholder="Your message" required></textarea>
                    </div>
                    </div>
                    <button class="form-submit" type="submit" required>Send Message</button>
                
                </form>

            </section>  
        </div>

    );
}
