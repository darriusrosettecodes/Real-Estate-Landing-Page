import React from "react";

export default function Search() {
    return(
        <div className="search-container">
            <i class="fa-solid fa-location-dot"></i>
            <input type="search" placeholder="City" />
            <button>Search</button>
        </div>
    )
}