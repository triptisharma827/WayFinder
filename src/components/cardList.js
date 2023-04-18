import React from "react";
import Card from "./Card";
import { collection } from "../DomainName";


export default function CardGroup(props) {
  return (
    <div className="cardList">
      <div className="row row-cols-1 row-cols-md-3  lg-4 card-row ">
        {collection.map((item) => {
          return (
            <div class="col-6 cardItem">
              <Card key={item.id} icon={item.icon} name={item.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
