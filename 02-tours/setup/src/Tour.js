import React, { useState } from 'react';

const Tour = ({tor,remove}) => {
  const[redMore,setRedmore]= useState(false)
const {id} = tor

  
  return <article className='single-tour'>
       <img src={tor.image} alt={tor.name} />
       <footer>
        <div className="tour-info">
          <h4>{tor.name}</h4>
          <h4 className='tour-price'>${tor.price}</h4>
          
        </div>
        <p>{redMore?  tor.info:`${tor.info.substring(0,200)}...`}</p>
      <button className='info-btn' onClick={()=>setRedmore(!redMore)}>More info!</button>
       <button className='delete-btn' onClick={()=>remove(id)}>Not interested!</button>
      
       </footer>
  </article>
};

export default Tour;
