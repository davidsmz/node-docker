const { Router } = require('express')
const _ = require('underscore')
const User = require('../models/user.models')
const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await User.find()
    return res.json({
      ok: true,
      users
    })
  } catch (err) {
    return res.json({
      ok: false,
      err
    })
  }
})
router.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body
    const user = new User({
      name,
      email,
      password
    })
    const userDB = await user.save()
    return res.json({
      ok: true,
      user: userDB
    })
  } catch (err) {
    return res.json({
      ok: false,
      err
    })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const body = _.pick(req.body, ['name'])
    const { id } = req.params
    const userDB = await User.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true
    })
    return res.json({
      ok: true,
      user: userDB
    })
  } catch (err) {
    return res.json({
      ok: false,
      err
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const userDB = User.findByIdAndDelete(id)
    return res.json({
      ok: true,
      user: userDB
    })
  } catch (err) {
    return res.json({
      ok: false,
      err
    })
  }
})

module.exports = router
