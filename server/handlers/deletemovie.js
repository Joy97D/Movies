import { movie } from "../models/movie.js";

export const DeleteMovie= async(req,res)=>{
    try{const {id}=req.params
    const delmovie= await movie.findByIdAndDelete(id)
    if(delmovie){
        return res.status(200).send(delmovie)}
        else{
            return res.status(404).send('No Movie found')
        }
    }
    catch(err){
        console.log(err)
        res.send({message:err.message}).status(400)   
}
}