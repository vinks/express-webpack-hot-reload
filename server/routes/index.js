import express from 'express'
import defaultController from '../controllers/defaultController'

const router = express.Router()

router.get('/health-check', (req, res) =>
  res.send('OK')
)

router.get('/', defaultController.index)

export default router
