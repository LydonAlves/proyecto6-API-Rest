const mongoose = require('mongoose')
const NP = require('../src/api/models/NP')

const nationalParks = [
  {
    name: 'Kruger National Park',
    province: 'Limpopo and Mpumalanga',
    mainAttraction: 'Big Five (Lion, Leopard, Rhino, Elephant, Buffalo)',
    priceDay: 'R400 per adult, R200 per child (International visitors)'
  },
  {
    name: 'Table Mountain National Park',
    province: 'Western Cape',
    mainAttraction: 'Table Mountain and Cape Point',
    priceDay:
      'Free entry, except for specific attractions like Boulders Penguin Colony'
  },
  {
    name: 'Addo Elephant National Park',
    province: 'Eastern Cape',
    mainAttraction: 'Elephant herds, diverse wildlife',
    priceDay: 'R307 per adult, R154 per child (International visitors)'
  },
  {
    name: 'Kgalagadi Transfrontier Park',
    province: 'Northern Cape',
    mainAttraction: 'Desert wildlife, Kalahari lions',
    priceDay: 'R372 per adult, R186 per child (International visitors)'
  },
  {
    name: 'Tsitsikamma National Park',
    province: 'Eastern Cape',
    mainAttraction: 'Coastal scenery, Otter Trail',
    priceDay: 'R242 per adult, R121 per child (International visitors)'
  },
  {
    name: 'Bontebok National Park',
    province: 'Western Cape',
    mainAttraction: 'Bontebok conservation, Breede River',
    priceDay:
      'R62 per adult, R31 per child (South African citizens and residents)'
  }
]

const parksDocuments = nationalParks.map((park) => new NP(park))

mongoose
  .connect(
    'mongodb+srv://lydonalves:(passwordRemoved)@cluster0.mavguad.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Successfully connected to MongoDB')
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err)
    process.exit(1)
  })

  .then(async () => {
    const allParks = await NP.find()
    if (allParks.length) {
      await NP.collection.drop()
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await NP.insertMany(parksDocuments)
    console.log('DatabaseCreated')
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .finally(() => mongoose.disconnect())
