const { Schema } = require('mongoose')

const schema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    keywords: {
      type: [ String ],
      required: true,
      validate: {
        validator: value => {
          return value.length >= 1
        },
        message: 'Please enter at least one keyword!'
      }
    },
    body: String,
    location: { // file path
      type: String,
      // required: true
    },
    reviews: {
      type: [ {
        type: Schema.Types.ObjectId,
        ref: 'Review'
      } ],
      validate: {
        validator: value => {
          return value.length <= 3
        },
        message: props => {
          return `This manuscript has already been reviewed ${props.value} times!`
        }
      }
    },
    community: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Community'
    }
  },
  {
    timestamps: true
  }
)

module.exports = schema