import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const Reviews = ({filmove,movies}) => {
  const [movie,setmovie]=useState('')
  const [year,setyear]=useState()
  const { id } = useParams();
  const [searchText,setsearchText]=useState('')
  const [searchTimeout, setSearchTimeout] = useState(null);
  let rating=0;
  const [searchedResults, setSearchedResults] = useState([]);
  const handleSearchChange=(e)=>{
    clearTimeout(searchTimeout);
    setsearchText(e.target.value)
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterposts(e.target.value);
        setSearchedResults(searchResult);
      }, 1500)
    );
  }
  const filterposts=(searchText)=>{
    const regex = new RegExp(searchText, "i");
    return filmove.filter(
      (item) =>
        regex.test(item.Comments) 
    );
  }
    useEffect(() => {
     if(filmove.length){
        movies.map((val,index)=>{
          if(val._id==filmove[0].Movie_ID){
          setmovie(val.Name)
          setyear(val.Release_date)
          }
        })
     }
     filmove.map((val)=>{
        rating=parseInt(val.Rating)+rating
     })
     updaterating(rating)
      }, [filmove])

  const updaterating=(rating)=>{
    if(rating>0){
      const data=movies.filter((val)=>{return id===val._id})
      const updateddata={
        Name:data[0].Name,
        Release_date:data[0].Release_date,
        Avg_Rating:String(rating/filmove.length),
      }
      if(data[0].Avg_Rating!==String(rating/filmove.length)){
        axios.put(`http://localhost:5555/movie/update/${id}`,updateddata).then(()=>{
        }).catch((err)=>{
          console.log(err)
        })}
       }
  }    
  return (
    <div>
      <div className='p-4'>
        <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8 ml-5 justify-center'>{movie}</h1>
        <form className="relative w-full ml-6 flex-center">
        <input
        type="text"
        placeholder="Search for tag or username"
        value={searchText}
        onChange={handleSearchChange}
        required
  
        className='block rounded-md border border-gray-200 bg-white py-2.5 font-satoshi pl-5 pr-12 text-sm shadow-lg font-medium focus:border-black focus:outline-none focus:ring-0;'
        >
        </input>
      </form>
        <div className="flex justify-end">
        </div>
        </div>
        <table className='w-full border-separate border-spacing-2'>
       <thead>
      <tr>
        <th className='border border-slate-600 rounded-md max-md:hidden'>
          Reveiwer Name 
        </th>
        <th className='border border-slate-600 rounded-md max-md:hidden'>
          Rating
        </th>
        <th className='border border-slate-600 rounded-md'>Comments</th>
      </tr>
    </thead>
    <tbody>{!searchText ?
             <>
            {filmove.map((mov, index) => (
              <tr key={mov._id} className='h-8'>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                  {mov.Name}
                </td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                  {mov.Rating!==null ?
                  (`${mov.Rating}/10`):("0/10")
                  }
                </td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                  {mov.Comments}
                </td>
              </tr>
              
            ))
    }</>:<>{
      searchedResults.map((mov, index) => (
        <tr key={mov._id} className='h-8'>
          <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
            {mov.Name}
          </td>
          <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
            {mov.Rating!==null ?
            (`${mov.Rating}/10`):("0/10")
            }
          </td>
          <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
            {mov.Comments}
          </td>
        </tr>
      ))
    }</>}
    </tbody>
  </table>
    </div>
    </div>
  )
}

export default Reviews