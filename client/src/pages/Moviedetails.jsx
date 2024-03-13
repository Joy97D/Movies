import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Reviews from './Reviews';

const Moviedetails = ({reviews,movies}) => {
    const { id } = useParams();
    const [filmove,setfilmove]=useState([])
    useEffect(() => {
      setfilmove(reviews.filter((val,index)=>{ return (val.Movie_ID===id)}))
    }, [])
  return (
    <div>
  <Reviews filmove={filmove} movies={movies}/>
  </div>
  )
}

export default Moviedetails