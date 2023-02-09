import asyncHandler from 'express-async-handler'
import Plot from '../models/plotModel.js'



const getPlots = asyncHandler(async (req, res) => {
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
  
    const count = await Plot.countDocuments({ ...keyword })
    const plots = await Plot.find({ ...keyword })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
  
    res.json({ plots, page, pages: Math.ceil(count / pageSize) })
  })




// @desc    Fetch single plot
// @route   GET /api/plots/:id
// @access  Public
const getPlotById = asyncHandler(async (req, res) => {
    const plot = await Plot.findById(req.params.id)
  
    if (plot){
      res.json(plot)
    } else {
      res.status(404)
      throw new Error('Plot not found')
    }
  })



// @desc    Create a plot
// @route   POST /api/plots
// @access  Private/Admin
const createPlot = asyncHandler(async (req, res) => {
    const plot = new Plot({
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
  
    const createdPlot = await plot.save()
    res.status(201).json(createdPlot)
  })




  export {
    getPlots,
    getPlotById,
  }