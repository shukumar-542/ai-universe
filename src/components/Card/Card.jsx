import React, { useEffect, useState } from 'react';
import Items from '../Items/Items';

const Card = () => {
    const [items, setItems] = useState([]);

    useEffect(()=>{
    
       const loadData =async()=>{
            const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
            const data = await res.json()
            setItems(data.data.tools)

       } 
       loadData()      
    },[])
    return (
        <div className='
        grid 
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3 
        gap-4 
        lg:px-12 
        my-6'>
          {
            items.map(item => <Items item={item} key={item.id}></Items>)
          }
        </div>
    );
};

export default Card;