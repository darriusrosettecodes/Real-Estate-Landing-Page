import React from "react";
import ContactImg from "../../images/contact.jpg"
import IndividualContact from "./IndividualContact";

export default function Contact() {
    return(
        <section className="contact" id="contact">
            <div className="left">
                <h2>Contact Us</h2>
                <h1>Easy to contact us</h1>
                <p>We always ready to help by providing the best services for you. We beleive a good blace to live can make your life better</p>

                <div className="contact-container">
                    <IndividualContact
                        icon="fa-solid fa-phone"
                        title="Call"
                    />

                    <IndividualContact
                        icon="fa-solid fa-message"
                        title="Chat"
                    />

                    <IndividualContact
                        icon="fa-solid fa-video"
                        title="Video Call"
                    />

                    <IndividualContact
                        icon="fa-solid fa-envelope"
                        title="Email"
                    />
                </div>
            </div>
            <div className="right">
                <img src={ContactImg} />
            </div>
        </section>
    )
}