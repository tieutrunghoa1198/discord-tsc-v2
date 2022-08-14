import {Client, Intents, Message, User} from "discord.js";
import {Converter} from "../converter/Converter";

export class AmeeV2 {
    private readonly TOKEN = process.env.TOKEN;
    private client: Client;
    private intent = { intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,
            Intents.FLAGS.GUILD_VOICE_STATES]}
    private converter = new Converter({});
    public testVar: any;
    constructor() {
        this.client = new Client(this.intent);
    }

    run() {
        this.login(this.TOKEN);
    }

    login(token: string) {
        this.client.login(token)
            .then(success => {
                console.log('login success');
            })
            .catch(err => {
                console.log(err)
            })
    }

    onMessage(): Promise<any> {
        return new Promise(((resolve, reject) => {
            this.client.on('messageCreate', (msg: Message) => {
                const user = this.converter.toUser(msg);
                // console.log(user);
                const guildMember = this.converter.toVoiceChannel(msg);
                console.log(guildMember);
                this.testVar = guildMember;
                resolve(guildMember);
            })
        }))
    }
}
