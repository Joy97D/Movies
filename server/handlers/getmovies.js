import { movie } from "../models/movie.js";

export const getmovie= async(req,res)=>{
    try{
        const movies=await movie.find();
         res.status(200).json(movies);
         }
        catch(err){
           res.status(404).json({message: err.message})
        }
}