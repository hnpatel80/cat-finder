import React from 'react';
import Card from "../card/card";
import  "./style.scss";
export const  CardList = (props) =>{
    const monsters = props.monsters;
    return (
        <div className='card-list'>
             {monsters && monsters.map((item,index)=>
                <Card key={item.id} monster={item} />
                   
                
        )}

        </div>
    );
}

export default CardList;