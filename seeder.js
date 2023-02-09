import dotenv from 'dotenv'
import plots from './data/plotData.js'
import houses from './data/houseData.js'
import connectDB from './config/db.js'
import Plot from './models/plotModel.js'
import House from './models/houseModel.js'




dotenv.config()
connectDB()
console.log("hi")


const importData = async () => {
    try {
      await Plot.deleteMany()
      await House.deleteMany()
  
      await Plot.insertMany(plots)
      await House.insertMany(houses)
  
    //   const adminUser = createdUsers[0]._id
  
      
      console.log('Data Imported!')
      process.exit()
    } catch (error) {
      console.error(`${error}`)
      process.exit(1)
    }
  }
  
  const destroyData = async () => {
    try {

      await Plot.deleteMany()
      await House.deleteMany()
  
      console.log('Data Destroyed!')
      process.exit()
    } catch (error) {
      console.error(`${error}`)
      process.exit(1)
    }
  }
  
  if (process.argv[2] === '-d') {
    destroyData()
  } else {
    importData()
  }
  