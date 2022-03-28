// Classes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(countryOfOrigin, brandName, colorOfVehicle, yearOfFabrication) {
        this.origin = countryOfOrigin,
            this.brand = brandName;
        this.color = colorOfVehicle,
            this.year = yearOfFabrication;
    }
    // Methods
    Car.prototype.testCar = function () {
        console.log("The testing of ".concat(this.brand, " ").concat(this.year, " was successful"));
    };
    return Car;
}());
var model1 = new Car("Japan", "Honda", "Lateblue", 1990);
var model2 = new Car("Italy", "Ferrari", "Red", 2001);
var model3 = new Car("Germany", "Audi", "Black", 2020);
var model4 = new Car("England", "Aston Martin", "Darkgreen", 2009);
var model5 = new Car("Italy", "Paggani", "White", 2018);
var NewCar = /** @class */ (function (_super) {
    __extends(NewCar, _super);
    function NewCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewCar.prototype.currentBill = function () {
        return 'The current ticket is for a total of $ 800,00';
    };
    return NewCar;
}(Car));
