import React from "react";

export default function IndividualContact(props) {
    return(
        <div className="individual-contact">
            <div className="individual-contact-top">
                <i className={props.icon}></i>
                <h2>{props.title}</h2>
            </div>
            <button>{props.title} now</button>
        </div>
    )
}