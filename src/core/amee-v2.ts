import {Client, Intents} from "discord.js";

export class AmeeV2 {
    private client: Client;
    private intent = { intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES,]}
    constructor() {
        this.client = new Client(this.intent);
    }

    run() {
        console.log('tét');
        this.client.login(process.env.TOKEN)
        this.client.on('ready', () => {
            console.log('ready')
        })
    }
}
