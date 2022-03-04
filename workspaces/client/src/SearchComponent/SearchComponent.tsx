import React from "react";
import './SearchComponent.css';

export function SearchComponent() {
    return <React.Fragment>
        <div className="search">
            <input placeholder="search products" className="search-input" /> <button className="search-button"><i className="fa fa-search"></i></button>
        </div>
    </React.Fragment>
}