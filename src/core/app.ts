import Express from "express";

export class App {
    private readonly PORT = process.env.PORT;
    private app;

    constructor() {
        this.app = new Express();
    }

    listen() {
        this.app.listen(this.PORT, () => {
            console.log('listening at port: ' + this.PORT);
        })
    }

    getDefault(smt: any) {
        this.app.get('/', (req, res) => {
            console.log(smt);
            res.send(smt);
        })
    }
}
