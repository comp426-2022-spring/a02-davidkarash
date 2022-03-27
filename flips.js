import min from 'minimist';
import {coinFlips} from './modules/coin.mjs';

let args = min(process.argv.slice(2))

if (args['number']) {
    console.log(coinFlips(args['number']));
} else {
    console.log(coinFlips(1));
}