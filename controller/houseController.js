import asyncHandler from 'express-async-handler'
import House from '../models/houseModel.js'




const getHouses = asyncHandler(async (req, res) => {
    const pageSize = 12
    const page = Number(req.query.pageNumber) || 1
  
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: 'i',
          },
        }
      : {}
  
    const count = await House.countDocuments({ ...keyword })
    const houses = await House.find({ ...keyword })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
  
    res.json({ houses, page, pages: Math.ceil(count / pageSize) })
  })




// @desc    Fetch single house
// @route   GET /api/houses/:id
// @access  Public
const getHouseById = asyncHandler(async (req, res) => {
    const house = await House.findById(req.params.id)
  
    if (house){
      res.json(house)
    } else {
      res.status(404)
      throw new Error('House not found')
    }
  })



// @desc    Create a house
// @route   POST /api/houses
// @access  Private/Admin
const createhouse = asyncHandler(async (req, res) => {
    const house = new House({
      name: 'Sample name',
      price: 0,
      user: req.user._id,
      image: '/images/sample.jpg',
      brand: 'Sample brand',
      category: 'Sample category',
      countInStock: 0,
      numReviews: 0,
      description: 'Sample description',
    })
  
    const createdHouse = await house.save()
    res.status(201).json(createdHouse)
  })




  export {
    getHouses,
    getHouseById,
  }