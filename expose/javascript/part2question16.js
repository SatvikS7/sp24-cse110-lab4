let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

for(let i = 0; i < Object.keys(statistics).length; i++) {
    if(Object.keys(statistics)[i].charAt(0) == 'r' || Object.values(statistics)[i]%2 == 1) {
        console.log(Object.values(statistics)[i]);
    }
}