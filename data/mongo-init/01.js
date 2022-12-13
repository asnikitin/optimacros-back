let res = [
  db.cars.drop(),
  db.cars.insert({
    brand: 'bmw',
    name: '120',
    year: '2009',
    price: '10000',
  }),
  db.cars.insert({
    brand: 'mercedes-benz',
    name: 'c200',
    year: '2009',
    price: '10000',
  }),
  db.createUser(
    {
      user: "root",
      pwd: "example",
      roles: [
        {
          role: "readWrite",
          db: "test"
        }
      ]
    }
  )
]
