import React from "react";
// import { collection } from "../DomainName";


function Card(props) {
    function copyText(){
        navigator.clipboard.writeText(props.name);
        alert("Copied!! Paste the same in the search bar below.");
    }
    return (
        <div className="collection-card">
                <img className="card-icon" src={props.icon} alt="icon" />
                <h4 className="card-name" onClick={copyText}>{props.name}</h4>
        </div>
    );
    }

export default Card;




