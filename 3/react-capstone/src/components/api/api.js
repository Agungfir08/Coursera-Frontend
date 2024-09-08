function seedRandom(seed) {
    let x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

export function fetchAPI(date) {
    let times = ['17:00'];
    let random = seedRandom(date.getTime());

    for (let i = 18; i < 24; i++) {
        if (random < 0.5) {
            times.push(`${i}:00`);
        }
        if (random > 0.5) {
            times.push(`${i}:30`);
        }
    }

    return times;
}
