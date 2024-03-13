import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteMovie = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/movie/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  return (
    <div className='p-4'>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are You Sure You want to delete this Movie?</h3>
        <div className='flex flex-row justify-between'>
        <button
          className='px-10 py-3 bg-red-600 text-white m-8  w-full'
          onClick={handleDeleteBook}
        >
          Yes
        </button>
        <button
          className='px-10 py-3 bg-slate-700 bg-green text-black m-8 w-full'
          onClick={()=>{navigate('/')}}
        >
          No
        </button>
      </div>
      </div>
    </div>
  )
}

export default DeleteMovie