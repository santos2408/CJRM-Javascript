const { join } = require("path");
const { faker } = require("@faker-js/faker");
const { writeFile } = require("fs/promises");

const Car = require("../src/entities/car");
const CarCategory = require("../src/entities/carCategory");
const Customer = require("../src/entities/customer");

const seederBaseFolder = join(__dirname, "../", "database");

const ITEMS_AMOUNT = 3;

const carCategory = new CarCategory({
  id: faker.string.uuid(),
  name: faker.vehicle.type(),
  carIds: [],
  price: faker.finance.amount(20, 100),
});

const cars = [];
const customers = [];

for (let index = 0; index < ITEMS_AMOUNT; index++) {
  const car = new Car({
    id: faker.string.uuid(),
    name: faker.vehicle.model(),
    releaseYear: faker.date.past({ years: 10 }),
    available: faker.datatype.boolean(0.5),
    gasAvailable: faker.datatype.boolean(0.5),
  });

  carCategory.carIds.push(car.id);
  cars.push(car);

  const customer = new Customer({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    age: faker.number.int({ min: 18, max: 50 }),
  });

  customers.push(customer);
}

const write = (filename, data) => writeFile(join(seederBaseFolder, filename), JSON.stringify(data));

(async () => {
  console.time();
  await Promise.all([write("cars.json", cars), write("carCategories.json", [carCategory]), write("customers.json", customers)]);
  console.timeEnd();
})();
