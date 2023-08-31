const { Schema, model } = require('mongoose');

const plantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: '/public/images/plants2.jpg',
    },
    care: {
      light: String,
      watering: String,
      temperature: String,
      soil: String,
      seasonalCare: String,
      fertilizing: String,
    },
    tips: {
      type: String,
      required: true,
    },
    rating: Number,
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Review',
      },
    ],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Plants = model('Plants', plantSchema);

module.exports = Plants;
