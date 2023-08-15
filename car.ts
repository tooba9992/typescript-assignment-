function car_info(manufacturer: string, modelName: string, color?: string, features?: string[]): any {
    let car = {
        manufacturer: manufacturer,
        modelName: modelName,
        color: color,
        features: features
    };

    return car;
}

let car1 = car_info("Toyota", "Camry", "Blue", ["Navigation", "Sunroof"]);
console.log(car1);


