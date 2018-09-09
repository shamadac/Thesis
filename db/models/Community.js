const { Schema } = require('mongoose')

module.exports = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: String,
    users: {
      type: [ Schema.Types.ObjectId ],
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
)