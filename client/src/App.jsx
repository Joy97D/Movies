import React from 'react'
import axios from 'axios'
import { useEffect,useState } from "react";
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import AddReview from './pages/AddReview';
import Addmovie from './pages/Addmovie'
import Moviedetails from './pages/Moviedetails';
import DeleteMovie from './pages/DeleteMovie';
function App() {
  const[movies,setmovies]=useState([])
  const[loading,setloading]=useState(false)
  const[reviews,setreviews]=useState()
  useEffect(() => {
      setloading(true)
      axios.get('http://localhost:5555/movie')
      .then((res)=>{
          setmovies(res.data)
      })
      .catch((err)=>{console.log(err)})
      axios.get('http://localhost:5555/movie/reviews')
      .then((res)=>{setreviews(res.data)})
      .catch((err)=>{console.log(err)})
      setloading(false)
  }, [])
  return (
   <Routes>
    <Route path='/' element={<Home movies={movies} />}/>
    <Route path='/Add' element={<Addmovie/>}/>
    <Route path='/AddReview' element={<AddReview movies={movies} />}/>
    <Route path='/movie/:id' element={<Moviedetails reviews={reviews} movies={movies}/>}/>
    <Route path='/movie/delete/:id' element={<DeleteMovie/>}/>
    </Routes>
  )
}

export default App
