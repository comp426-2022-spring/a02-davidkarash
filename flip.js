// Import the coinFlip function from your coin.mjs file
import {coinFlips, countFlips} from './modules/coin.mjs';
// Call the coinFlip function and put the return into STDOUT
let args = process.argv[2]
console.log(args)
let flips = []
if (process.argv[2]) {
    flips = coinFlips(args[2])
} else {
    flips = coinFlips(1)
}
console.log(flips)
console.log(countFlips(flips))