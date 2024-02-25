import React from "react";
import Logo from ".././images/logo2.png"

export default function Footer() {
    return(
        <footer>
            <div className="left">
                <img src={Logo} alt="footerlogo"/>
                <p>Our vision is to make all people the best place to live for them.</p>
            </div>

            <div className="right">
                <h1>Information</h1>
                <p>145 New York, FL 5467, USA</p>
                <ul>
                    <li>Property</li>
                    <li>Services</li>
                    <li>Product</li>
                    <li>About Us</li>
                </ul>
            </div>
        </footer>
    )
}
