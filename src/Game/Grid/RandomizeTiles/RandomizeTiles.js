//this function will return an array with random number between 1 and 8 or 1 and 16
//you may have noticed that i have pushed the same number twice into the array
//every value must have a duplicate value in the array


export default function RandomizeTiles (grid) {
    const random = [];
    if(grid === '4x4')
        for(let i = 0; i < 8; i++){
            let currentIndex = Math.floor(Math.random() * 8) + 1;
            while(random.includes(currentIndex))
                currentIndex = Math.floor(Math.random() * 8) + 1;
            random.push(currentIndex)
            random.push(currentIndex)
        }
    else
        for(let i = 0; i < 18; i++){
            let currentIndex = Math.floor(Math.random() * 18) + 1;
            while(random.includes(currentIndex))
                currentIndex = Math.floor(Math.random() * 18) + 1;
            random.push(currentIndex);
            random.push(currentIndex);
        }

    return random;
}