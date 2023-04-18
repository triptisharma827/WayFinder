import React from "react";
import { popularCategory,collection } from "../DomainName";
import Card from "./Card";


function CategoryPage() {
    return (
        <div className="category-section row ">
                <div className="popularCategory col-6 mb-3">
                    <h2>Popular Categories</h2>
                    {popularCategory.map((item) => {
                        return (
                            <div className="category">
                                <h4>{item.name}</h4>
                                <p className="count">{item.count}</p>
                                <hr></hr>
                            </div>
                        )
                    })}
                </div>
                <div className="collection col-6">
                    <Card />

                </div>
        </div>
    )
}

export default CategoryPage;