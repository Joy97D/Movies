import { movie } from "../models/movie.js";

export const CreateMovie= async(req,res)=>{
    if (
        !req.body.Name ||
        !req.body.Release_date
      ){
        return res.status(401).send({
            message: 'Send all required fields',
      });
}
    const newmovie = {
        Name: req.body.Name,
        Release_date: req.body.Release_date,
        Avg_Rating:req.body.Avg_Rating,
      };
      const mov = await movie.create(newmovie);
      return res.status(201).send(mov);
}