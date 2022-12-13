import {Router} from 'express'

const router = Router()

router.use('/', (req, res) => {
  return res.jsonp('Hello World!')
})

export {router}