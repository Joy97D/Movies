import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import axios from 'axios'
import { useEffect,useState } from "react";
import Button from '@mui/material/Button';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

function Home({movies}) { 
    return (
     <div className='p-4'>
        <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8 ml-5 justify-center'>The Best Movies Site!</h1>
        <div className="flex justify-end">
        <Link to='/Add'>
          <Button variant="outlined">ADD New Movie</Button>
        </Link>
        <Link to='/AddReview'>
          <Button variant="outlined">ADD New Review</Button>
        </Link>
        </div>
        </div>
        <table className='w-full border-separate border-spacing-2'>
       <thead>
      <tr>
        <th className='border border-slate-600 rounded-md'>Movie Name</th>
        <th className='border border-slate-600 rounded-md max-md:hidden'>
          Release Date
        </th>
        <th className='border border-slate-600 rounded-md max-md:hidden'>
          Rating
        </th>
        <th className='border border-slate-600 rounded-md'>Operations</th>
      </tr>
    </thead>
    <tbody>
      {movies.map((book, index) => (
        <tr key={book._id} className='h-8'>
          <td className='border border-slate-700 rounded-md text-center'>
            {book.Name}
          </td>
          <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
            {book.Release_date}
          </td>
          <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
            {book.Avg_Rating!==null ?
            (`${book.Avg_Rating}/10`):("0/10")
            }
          </td>
          <td className='border border-slate-700 rounded-md text-center'>
            <div className='flex justify-center gap-x-4'>
            <Link to={`/movie/${book._id}`}>
                <BsInfoCircle className='text-2xl text-green-800' />
              </Link>
              <Link to={`/movie/delete/${book._id}`}>
                <MdOutlineDelete className='text-2xl text-red-600' />
              </Link>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
    </div>
    )
  }
  
  export default Home