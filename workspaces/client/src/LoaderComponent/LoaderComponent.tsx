import React from "react";
import ReactLoading from 'react-loading';
import './LoaderComponent.css';

export default function LoaderComponent() {
    return <div className="center">
        <ReactLoading type={"spinningBubbles"} color="#fgfg" />
        Loading....
    </div>
}   