import { movie } from "../models/movie.js";

export const getmoviebyId= async(req,res)=>{
    try{
        const {id}=req.params
        const movies=await movie.findById(id);
         res.status(200).json(movies);
         }
        catch(err){
           res.status(404).json({message: err.message})
        }
}