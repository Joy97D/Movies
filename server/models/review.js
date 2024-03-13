
import mongoose from "mongoose";

const reviewschema=mongoose.Schema({
  Movie_ID:{
     type:String,
     required:true
  },  
  Name:{
      type:String,
      default:null
  },
  Rating:{
     type: Number,
     required:true
  },
  Comments:{
    type:String,
    required:true
  }
},
{
  timestamps:true
}
)
export const review=mongoose.model('Review',reviewschema);