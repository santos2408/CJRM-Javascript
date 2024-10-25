import { readFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

import { expect } from "chai";
import { describe, it, before, beforeEach, afterEach } from "mocha";
import { createSandbox } from "sinon";

import CarService from "../../../src/service/carService.js";
import Transaction from "../../../src/entities/transaction.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const validCar = JSON.parse(await readFile(join(__dirname, "../../mocks", "valid-car.json")));
const validCarCategory = JSON.parse(await readFile(join(__dirname, "../../mocks", "valid-car-category.json")));
const validCustomer = JSON.parse(await readFile(join(__dirname, "../../mocks", "valid-customer.json")));

const carsDatabase = join(__dirname, "../../../database", "cars.json");

console.time("time testing");

describe("CarService Suite Tests", () => {
  let carService = {};
  let sandbox = {};

  before(() => {
    carService = new CarService({ cars: carsDatabase });
  });

  beforeEach(() => {
    sandbox = createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should retrieve a random position from an array", async () => {
    const data = [0, 1, 2, 3, 4];
    const result = await carService.getRandomPositionFromArray(data);
    expect(result).to.be.lte(data.length).and.be.gte(0);
  });

  it("should choose the first 'id' from carsIds in carCategory", () => {
    const carCategory = Object.create(validCarCategory);
    const carIdIndex = 0;

    sandbox.stub(carService, carService.getRandomPositionFromArray.name).returns(carIdIndex);

    const result = carService.chooseRandomCar(carCategory);
    const expected = carCategory.carIds[carIdIndex];

    expect(carService.getRandomPositionFromArray.calledOnce).to.be.ok;
    expect(result).to.be.equal(expected);
  });

  it("given a carCategory it should return a available car", async () => {
    const car = validCar;
    const carCategory = Object.create(validCarCategory);
    carCategory.carIds = [car.id];

    sandbox.stub(carService.carRepository, carService.carRepository.find.name).resolves(car);
    sandbox.spy(carService, carService.chooseRandomCar.name);

    const result = await carService.getAvailableCar(carCategory);
    const expected = car;

    expect(carService.chooseRandomCar.calledOnce).to.be.ok;
    expect(carService.carRepository.find.calledWithExactly(car.id)).to.be.ok;
    expect(result).to.be.deep.equal(expected);
  });

  it("given a carCategory, customer and numberOfDays it should calculate final amount in real (BRL)", async () => {
    const customer = Object.create(validCustomer);
    const carCategory = Object.create(validCarCategory);

    customer.age = 50;
    carCategory.price = 37.6;

    const numberOfDays = 5;

    // não depender de dados externos
    sandbox.stub(carService, "taxesBasedOnAge").get(() => [{ from: 40, to: 50, then: 1.3 }]);

    const expected = carService.currencyFormat.format(244.4);
    const result = carService.calculateFinalPrice(customer, carCategory, numberOfDays);

    expect(result).to.be.deep.equal(expected);
  });

  it("given a customer and a car category it should return a transaction receipt", async () => {
    const car = validCar;
    const carCategory = { ...validCarCategory, price: 37.6, carIds: [car.id] };
    const customer = Object.create(validCustomer);

    customer.age = 20;

    const numberOfDays = 5;
    const dueDate = "10 de novembro de 2020";

    const now = new Date(2020, 10, 5);

    sandbox.useFakeTimers(now.getTime());
    sandbox.stub(carService.carRepository, carService.carRepository.find.name).resolves(car);

    const expectedAmount = carService.currencyFormat.format(206.8);
    const result = await carService.rent(customer, carCategory, numberOfDays);
    const expected = new Transaction({
      customer,
      car,
      dueDate,
      amount: expectedAmount,
    });

    expect(result).to.be.deep.equal(expected);
  });
});

console.timeEnd("time testing");
