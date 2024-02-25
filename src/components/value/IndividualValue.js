import React from 'react'

export default function IndependentValue({ description, isOpen, toggleDescription, ...props }) {

    return(
        <div className='independent-value'>
            <div className='indepenedent-value-top'>
                <i className={props.icon1}></i>
                <h3>{props.title}</h3>
                <i className="fa-solid fa-caret-down" onClick={toggleDescription}></i>
            </div>
            {isOpen && (
                <div className='independent-value-cont'>
                    <p>{description}</p>
                </div>
            )}
        </div>
    )
}