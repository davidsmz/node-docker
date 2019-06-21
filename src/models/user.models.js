const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

userSchema.pre('save', async function(next) {
  try {
    const user = this
    let password = user.password
    hash = await bcrypt.hashSync(password, 10)
    user.password = hash
    next()
  } catch (err) {
    next(err)
  }
})

userSchema.methods.toJSON = function() {
  const user = this
  const userObj = user.toObject()
  delete userObj.password
  return userObj
}

module.exports = model('User', userSchema)
