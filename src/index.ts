import {AmeeV2} from "./core/amee-v2";
require('dotenv').config()

const main = () => {
    const bot = new AmeeV2();
    bot.run();
}
main();