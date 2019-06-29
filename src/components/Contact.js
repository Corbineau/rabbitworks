import React from "react";
import './Contact.css';
import ContactForm from './ContactForm';

function Contact() {
    return (
        <div className="content">
                <header>
                    <h1>Contact</h1>
                </header>
                <div className="bio">
                    <ContactForm />
                    <h2 className="contactStats" id="stats">Email: lochinvar at gmail dot com | Phone: 919.599.7457</h2>
                  
                        
                        <div className="response thankyou_message" id="thankyou_message">
                            Thank you! your message has been sent.
                        </div>
                </div>
            </div>
    );
}

export default Contact;