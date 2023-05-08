import React from 'react';
import Tour from './Tour';
const Tours = ({tour,remove}) => {
  const{id}= tour
  return <div >
    <div className='title'>
      <h1>Our Tours</h1>
      <div className='underline'></div>
    </div>
        {tour.map((tor)=>{
          return <Tour remove={remove} key={id} tor={tor}></Tour>
        })}
         
        
  </div>
};

export default Tours;
