// Classes

class Car {
    origin: string;
    brand: string;
    color: string;
    year: number;
    constructor (
        countryOfOrigin: string,
        brandName: string,
        colorOfVehicle: string,
        yearOfFabrication: number
                 ) {
            this.origin = countryOfOrigin,
            this.brand = brandName
            this.color = colorOfVehicle,
            this.year = yearOfFabrication
    }
    // Methods
    testCar() {
        console.log(`The testing of ${this.brand} ${this.year} was successful`)
    }
}
const model1 = new Car ("Japan", "Honda", "Lateblue", 1990);
const model2 = new Car ("Italy", "Ferrari", "Red", 2001);
const model3 = new Car ("Germany", "Audi", "Black", 2020);
const model4 = new Car ("England", "Aston Martin", "Darkgreen", 2009);
const model5 = new Car ("Italy", "Paggani", "White", 2018);
// console.log(model4);
// model4.testCar();

// Visibility - private
// If we don't want the value of an att change, must add the keyword "private" before the att name

/* class NewCar {
    private origin: string;
    private brand: string;
    color: string;
    year: number;
    constructor (
        countryOfOrigin: string,
        brandName: string,
        colorOfVehicle: string,
        yearOfFabrication: number
                 ) {
            this.origin = countryOfOrigin,
            this.brand = brandName
            this.color = colorOfVehicle,
            this.year = yearOfFabrication 
                 }
} */
// Simplify code 
/* class NewCar {
    constructor (
       private readonly countryOfOrigin: string, // readonly doesn't allow change inclusive in 
       private brandName: string,                // Class define
       private colorOfVehicle: string,
       private yearOfFabrication: number,
       private priceOfVehicle: number
                 ) {}
// Example ERROR changing value of att throught Method of Class  
// changingValue() {
//     this.countryOfOrigin = "";
// }
 get getPrice() {
     return `The current price of this unity is ${this.priceOfVehicle}`
 }
 set setNewPrice(value: number) {
     this.priceOfVehicle = value;
 }
 // Static Method
 static priceToCurrency (value: number, typeOfCurrency: string) {
    let result = "";
    switch (typeOfCurrency) {
     case "USD":
         result = "U$D " + value;
         break;
     case "EURO":
         result = "EU$ " + value;
         break;
     default: 
         return result; 
    }
    return result;
 }
}
const model6 = new NewCar ("France", "Peugeot", "Gold", 1996, 2200); */
// model6.brand = "Citroen";
// model6.origin = "FR"
// console.log(model6)
// console.log(model6.getPrice);
// model6.setNewPrice = 2500;
// console.log(model6.getPrice);
// console.log(NewCar.priceToCurrency(2500, "USD")); // We can create a new instance of NewCar without keyword "new"

// Classes and Interfaces
interface Billable {      // Define an interface
    currentBill():string; 
}
class NewCar extends Car implements Billable { // Implements the interface throught keyword "implements"
    currentBill(): string {
        return 'The current ticket is for a total of $ 800,00'
    }
}