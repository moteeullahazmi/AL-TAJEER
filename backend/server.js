import express from 'express'
import cors from "cors"
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import cloudinaryFunction from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'


// App config
const app = express()
const port = process.env.PORT || 4000
connectDB()
cloudinaryFunction()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/user', userRouter)


// api endpoints
app.use('/api/user', userRouter)

app.get("/", (req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>console.log(`Server started on port: ${port}`))
