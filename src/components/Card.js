import React from "react";
// import { collection } from "../DomainName";

function Card(props) {
    return (
        <div className="card-group">
            <div className="collection-card">
                <img src={props.icon} alt="icon" />
                <h4>{props.name}</h4>
            </div>
        </div>
    );
    }

export default Card;




