import React from "react";
import './Card.scss';
import { Link } from "react-router-dom";

const Card = ({data}) => {
    return (
        <Link className="card">
            <div className="card__container">
                <img src={data.img} />
                <span className="description">{data.desc}</span>
                <span className="title">{data.title}</span>
            </div>
        </Link>
    )
}

export default Card;