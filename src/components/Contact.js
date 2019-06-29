import React from "react";
import './Contact.css';

function Contact() {
    return (
        <div class="content">
                <header>
                    <h1>Contact</h1>
                </header>
                <div class="bio">
                    <h2 class="contactStats" id="stats">Email: lochinvar at gmail dot com | Phone: 919.599.7457</h2>
                    <p>
                        <form id="gform" class="contactform" name="contact" method="POST" action="https://script.google.com/macros/s/AKfycbwmkwAtAWuPmPkm2eBVEicDp6v7XDa4nTcJGiuRDf2pHYsELsE/exec">
                            Name:<br />
                            <input class="formbox" type="text" name="name" id="a-name" />
                            <br />
                            Email:<br />
                            <input class="formbox" type="text" name="email" id="email" />
                            <br />
                            Message:<br />
                            <textarea class="message" type="text" name="message" id="message" ></textarea>
                            <br />
                            <input class="button" type="submit" value="Submit" id="send-btn" />
                        </form>
                        <div class="response thankyou_message" id="thankyou_message">
                            Thank you! your message has been sent.
                        </div>
                    </p>
                </div>
            </div>
    );
}

export default Contact;