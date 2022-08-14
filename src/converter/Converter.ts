import {Client, GuildMember, Message, User} from "discord.js";

export class Converter {
    constructor(private dependencies: any) {
    }

    toUser(msg: Message) {
        return {
            user: msg.author,
            channelId: msg.channelId,
            guildId: msg.guildId
        };
    }

    toVoiceChannel(msg: Message): GuildMember {
        return msg.member;
    }

}