class Avto {
    constructor(balance, state){
        this.balance = balance;
        this.state = state;
    }

    carRepair(repairCost) {
        return `Ваш автомобиль можно починить - ${Math.floor(this.balance / repairCost)} раз(а).`
    }
};

let reno = new Avto(350, 'broken');
let BMW = new Avto(980, 'good');
let Mer = new Avto(50, 'average');

console.log(reno.carRepair(200));
console.log(BMW.carRepair(150));
console.log(Mer.carRepair(20));