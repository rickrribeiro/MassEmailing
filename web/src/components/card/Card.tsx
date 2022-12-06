import React from 'react';
import './Card.css'

interface RecommendationProps {
    id: string;
    title: string;
    src : string;
    description: string;
    price?: number;
  }

function Card(props: RecommendationProps) {
    return (
        <div className='card'>
            <img src={props.src} alt="" />
            <div className="card__info">
                <h2>{props.title}</h2>
                <h4>{props.description}</h4>
                <h3>£{props.price}</h3>{/* TODO FIXAR NO CANTO INFERIOR DEPOIS */}
  
            </div>
        </div>
    )
}

export default Card