import express from 'express'
import { getHouses,getHouseById } from '../controller/houseController.js';

const router =express.Router()

router.route('/').get(getHouses)
router.route('/:id').get(getHouseById)

export default router;
