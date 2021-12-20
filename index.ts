interface Driveable {
    speed: number;
    drive(): string;
}



class Car implements Driveable {
    speed = 10;

    drive() {
        return `Iam driving at ${this.speed}`;
    }
}

const myCarx = new Car();
const startDriving  = (vehicle: Driveable) => {
    vehicle.drive();
};


// startDriving(myCar);