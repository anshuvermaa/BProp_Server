import express from 'express'
import { getPlots,getPlotById } from '../controller/plotController.js';

const router =express.Router()




router.route('/').get(getPlots)
router.route('/:id').get(getPlotById)

export default router;
