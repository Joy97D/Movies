import { review } from "../models/review.js";
import { movie } from "../models/movie.js";

export const CreateReview= async(req,res)=>{
    if (
        !req.body.Movie_ID ||
        !req.body.Rating ||
        !req.body.Comments 
      ){
        return res.status(401).send({
            message: 'Send all required fields',
      });
}
    const newreview = {
        Movie_ID: req.body.Movie_ID,
        Name: req.body.Name,
        Rating:req.body.Rating,
        Comments:req.body.Comments,
      };
      const rev = await review.create(newreview);
      return res.status(201).send(rev);
}