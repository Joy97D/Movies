import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useEffect,useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const AddReview = ({movies,reviews}) => {
const [Name, setName] = useState('');
const [Rating, setRating  ] = useState('');
const [Comment, setComment] = useState('');
const [Movie, setMovie] = useState('');
const navigate = useNavigate();

const handleSave=()=>{
  const data={
    Movie_ID:Movie,
    Name:Name,
    Rating:Rating,
    Comments:Comment,
  }
  axios.post(`http://localhost:5555/movie/create/review`,data).then((res)=>{
    navigate('/');
  }).catch((err)=>{
    console.log(err)
  })
}
const handleChange = (event) => {
  setMovie(event.target.value);
};
  return (
    <div className='p-4'>
    <h1 className='text-3xl my-4'>Add Review</h1>
    <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Movie</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Movie}
          label="Select Movie"
          onChange={handleChange}
        >
          {movies.map((val)=>{ 
             return <MenuItem value={val._id} key={val._id}>{val.Name}</MenuItem>
          })}
        </Select>
      </FormControl>
    </Box>
      <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Name</label>
        <input
          type='text'
          value={Name}
          onChange={(e) => setName(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
        />
      </div>
      <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Rating</label>
        <input
          type='text'
          value={Rating}
          onChange={(e) => setRating(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2  w-full '
        />
      </div>
      <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Comments</label>
        <input
          type='text'
          value={Comment}
          onChange={(e) => setComment(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2  w-full '
        />
      </div>
      <button className='p-2 bg-sky-300 m-8' onClick={handleSave}>
        Submit
      </button>
    </div>
  </div>
  )
}

export default AddReview