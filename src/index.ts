import {AmeeV2} from "./core/amee-v2";
import {App} from "./core/app";
require('dotenv').config()
import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = process.env.PORT;

const bot = new AmeeV2();
bot.run();
bot.onMessage();

app.get('/', (req: Request, res: Response) => {
    res.send('something cool');
});

app.listen(port, () => {
    console.log('listening at port: ' + port);
})

//
// const main = () => {
//     const app = new App();
//     app.listen();
//
//     const bot = new AmeeV2();
//     bot.run();
//     bot.onMessage().then((data) => {
//         console.log(data);
//         app.getDefault(data);
//     });
// }
// main();
