// Require Mongoose
const mongoose = require('mongoose');

// Require Plants Model
const Plants = require('../models/Plants.model.js');

const MONGO_URI =
  'mongodb+srv://ritasaraiva:mrTW4Dz5cYpvcht2@cluster0.pwhb7jd.mongodb.net/?retryWrites=true&w=majority';

const allPlants = [
  {
    name: 'Calathea orbifolia ',
    description: `Calathea orbifolia is a striking tropical houseplant known for its large, round leaves with stunning silver-gray stripes and intricate patterns. The foliage of this plant is the main attraction, making it a popular choice among indoor plant enthusiasts. It's native to the rainforests of Bolivia.`,
    image: '/images/orbifelia.jpg',
    care: {
      light: '',
      watering: '',
      temperature: '',
      soil: '',
      seasonalCare: '',
      fertilizing: '',
    },
    tips: `Temperature Sensitivity: Protect the plant from temperature fluctuations and drafts, which can cause stress and leaf damage.
    Grouping: Grouping it with other plants can help create a microclimate with higher humidity levels.
    Rotation: Rotate the plant periodically to ensure even growth and prevent it from leaning toward the light source.
    Pest Management: Keep an eye out for common indoor plant pests like spider mites and mealybugs, and treat promptly if you notice any infestations.
    Repotting: Repot the plant when it becomes root-bound, typically every 2-3 years in the spring. Choose a slightly larger pot as needed.`,
  },
];

async function insertPlants() {
  try {
    // establishing the connection with our DB
    let db = await mongoose.connect(MONGO_URI);

    // Feedback regarding our connection
    console.log('Database is now connected');

    // Create Plants in our database with the seeds array
    let PlantsCreated = await Plants.create(allPlants);

    // Feedback about Plants creation
    console.log(`Created ${PlantsCreated.length} Plants!`);

    // Close the connection
    await mongoose.connection.close();
  } catch (error) {
    console.log('An error occurred while connecting to DB', error);
  }
}
insertPlants();
