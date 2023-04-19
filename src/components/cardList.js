import React from "react";
import Card from "./Card";
import Collection from "../DomainName";


export default function CardGroup(props) {
  return (
    <div className="cardList">
      <div className="row row-cols-1 row-cols card-row ">
        {Collection.map((item) => {
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
