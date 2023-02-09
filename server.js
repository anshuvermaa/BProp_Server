import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'
import plotRoutes from './routes/plotRoutes.js'
import houseRoutes from './routes/houseRoutes.js'


dotenv.config()

connectDB();
const PORT=process.env.PORT 


const app = express();

app.use(express.json())


app.use('/api/plots', plotRoutes)
app.use('/api/houses', houseRoutes)



app.get('/',(req, res) =>{
    res.send("API is running...")
})








app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})







