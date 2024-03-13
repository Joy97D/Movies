import express from "express"
import { PORT,mongodburi } from './config.js'
import mongoose from "mongoose"
import cors from 'cors'
import router from "./handlers/index.js"

const app=express()

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    return res.status(200).send('Welcome')
})
app.use('/movie',router)
mongoose.connect(mongodburi).then(()=>{
    console.log('MongoDB connected')
    app.listen(PORT,()=>{
        console.log(`Listening on ${PORT}`)
    })
})
.catch((err)=>{console.log(err)})