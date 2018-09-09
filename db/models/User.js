const { Schema } = require('mongoose')

module.exports = new Schema(
  {
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    username: {
      type: String,
      unique: true,
      required: true
    },
    usertype: {
      required: true,
      type: String,
      validate: {
        validator: value => {
          return ['member', 'subscriber'].indexOf(value) !== -1
        },
        message: 'User type is invalid!'
      }
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    communities: {
      type: [ Schema.Types.ObjectId ],
      ref: 'Community'
    },
    credentials: [ Schema.Types.Mixed ]
  },
  {
    timestamps: true
  }
)