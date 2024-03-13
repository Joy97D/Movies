import { movie } from "../models/movie.js";

export const updateMovie = async(req,res) => {
    try{
    const updatedmovie = {
        Name: req.body.Name,
        Release_date: req.body.Release_date,
        Avg_Rating:req.body.Avg_Rating,
      };
      const {id}=req.params
      const upmovie = await movie.findByIdAndUpdate(id,updatedmovie);
  
      return res.status(201).send(upmovie);
    }
    catch(err){
        console.log(err)
        res.send({message:err.message}).status(400)
    }
}

export default updateMovie