import React from 'react';
import './Card.css'
import { Button } from '@material-ui/core'
import { useHistory } from "react-router-dom";

interface RecommendationProps {
    id: string;
    title: string;
    src : string;
    description: string;
    price?: number;
    city:{
        name: string;
    }
  }

function Card(props: RecommendationProps) {

    let navigate = useHistory(); 

    return (
        <div className='card'>
            <img src={props.src} alt="" />
            <div className="card__info">
                <h2>{props.title}</h2>
                <h4>{props.description}</h4>
               
                <Button onClick={() =>navigate.push(`/city/${props.city.name}`)} variant='outlined'>Explore city</Button>
  
            </div>
        </div>
    )
}

export default Card