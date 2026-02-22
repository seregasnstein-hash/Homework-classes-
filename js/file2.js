class Building {
  constructor(h, w, l, quantity_of_floors, underground_floor = 0) {
    this.height = h;
    this.width = w;
    this.length = l;
    this.quantity_of_floors = quantity_of_floors;
    this.underground_floor = underground_floor;
  }

  addFloor(quantity = 0){
    return this.quantity_of_floors += quantity;
  }

  minusFloor(quantity = 0){
    return this.quantity_of_floors -= quantity;
  }

  areaBuilding() {
    let getAreaFloor = this.width * this.length * (this.quantity_of_floors + this.underground_floor);
    
    return `Общая полезная площадь вашего здания - ${getAreaFloor}`;
  }
}

let build = new Building(10, 5, 15, 4, 1);
console.log(build.areaBuilding());

build.addFloor(2);
console.log(build.quantity_of_floors);
console.log(build.areaBuilding());

build.minusFloor(1)
console.log(build.quantity_of_floors);
console.log(build.areaBuilding());


