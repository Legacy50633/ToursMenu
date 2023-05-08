import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [tour,setTour] = useState([])
  const [loading,setLoading] = useState(false)

  const remove = (id)=>{
    const newtour = tour.filter((tour)=>tour.id !== id)
    setTour(newtour)

  }
  const fetchTours = async()=>{
    setLoading(true)
    try {
      const response =  await fetch(url)
      const tours = await response.json() 
       console.log(tours)
      setLoading(false)
      setTour(tours)
      
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
   
    
    }    
   useEffect(()=>{
    fetchTours()
   },[]) 
  
  if(loading){
        return <Loading/>
      }
  if(tour.length === 0){
    return <main>
      <h1>No tours Left</h1>
      <div className="underline"></div>
      <button className='get' onClick={fetchTours}>Get List!</button>
    </main>
  }
  return <Tours remove={remove} tour={tour}/>
        
}

export default App
