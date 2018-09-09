const { Schema } = require('mongoose')

module.exports = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    manuscript: {
      type: Schema.Types.ObjectId,
      required: true
    }
  },
  {
    timestamps: true
  }
)