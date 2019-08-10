import React from 'react'
import './CardStyle.css'
import {Card} from './Card'
export const CardList=(props)=>{

    return(
        <div className="CardStyle">
            
            {props.monsters.map(monster=>
            <Card key={monster.id} monster={monster}/>)}
            
            </div>
    )

}