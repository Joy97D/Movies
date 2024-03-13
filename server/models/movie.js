import mongoose from "mongoose";

const movieschema=mongoose.Schema({
  Name:{
     type:String,
     required:true
  },
  Release_date:{
      type:String,
      required:true
  },
  Avg_Rating:{
     type:String,
     default:null
  }
},
{
  timestamps:true
}
)
export const movie=mongoose.model('Movie',movieschema);