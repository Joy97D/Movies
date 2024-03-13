import { review } from "../models/review.js";

export const getreview= async(req,res)=>{
    try{
        const rev=await review.find();
         res.status(200).json(rev);
         }
        catch(err){
           res.status(404).json({message: err.message})
        }
}