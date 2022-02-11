import React from "react";
import { NavBarComponent } from "../NavBarComponent/NavBarComponent";

export function HomepageComponent() {
    return <React.Fragment>
    <style type="text/css">
            {`
    .cards-view {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        margin-top: 30px;
        flex-flow: row wrap;
    }
    `}
    </style>
    <NavBarComponent />
    </React.Fragment>
}

export default HomepageComponent;