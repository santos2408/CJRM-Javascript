import BaseRepository from "../repository/baseRepository.js";
import Tax from "../entities/tax.js";
import Transaction from "../entities/transaction.js";

class CarService {
  constructor({ cars }) {
    this.carRepository = new BaseRepository({ filename: cars });
    this.taxesBasedOnAge = Tax.taxesBasedOnAge;
    this.currencyFormat = new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" });
  }

  getRandomPositionFromArray(list) {
    const listLength = list.length;
    return Math.floor(Math.random() * listLength);
  }

  chooseRandomCar(carCategory) {
    const randomCarIndex = this.getRandomPositionFromArray(carCategory.carIds);
    const carId = carCategory.carIds[randomCarIndex];
    return carId;
  }

  async getAvailableCar(carCategory) {
    const carId = this.chooseRandomCar(carCategory);
    const car = await this.carRepository.find(carId);
    return car;
  }

  calculateFinalPrice(customer, carCategory, numberOfDays) {
    const { age } = customer;
    const { price } = carCategory;
    const { then: tax } = this.taxesBasedOnAge.find((tax) => age >= tax.from && age <= tax.to);
    const finalPrice = tax * price * numberOfDays;
    const formattedPrice = this.currencyFormat.format(finalPrice);
    return formattedPrice;
  }

  async rent(customer, carCategory, numberOfDays) {
    const car = await this.getAvailableCar(carCategory);
    const finalPrice = this.calculateFinalPrice(customer, carCategory, numberOfDays);
    const options = { year: "numeric", month: "long", day: "numeric" };

    const today = new Date();
    today.setDate(today.getDate() + numberOfDays);
    const dueDate = today.toLocaleDateString("pt-br", options);

    const transaction = new Transaction({
      customer,
      car,
      dueDate,
      amount: finalPrice,
    });

    return transaction;
  }
}
export default CarService;
