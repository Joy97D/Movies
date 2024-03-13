import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useEffect,useState } from "react";
const Addmovie = () => {
const [Name, setName] = useState();
const [Release, setRelease] = useState();
const [loading, setLoading] = useState(false);
const navigate = useNavigate();
const handleSave=()=>{
    const data = {
        Name:Name,
        Release_date:Release,
        Rating:null,
      };
      setLoading(true);
      axios.post('http://localhost:5555/movie/create',data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
}
  return (
    <div className='p-4'>
    <h1 className='text-3xl my-4'>Add Movie</h1>
    <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
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
        <label className='text-xl mr-4 text-gray-500'>Release Date</label>
        <input
          type='text'
          value={Release}
          onChange={(e) => setRelease(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2  w-full '
        />
      </div>
      <button className='p-2 bg-sky-300 m-8' onClick={handleSave}>
        Add
      </button>
    </div>
  </div>
);
}

export default Addmovie