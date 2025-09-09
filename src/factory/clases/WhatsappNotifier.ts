class WhatsAppChannel implements IChannel {
    name = "whatsapp";

    validate(to: string): boolean {
        const waRegex = /^\+\d{10,15}$/;
        return waRegex.test(to);
    }
}

export class WhatsappNotifier implements INotifier {
    channel: IChannel = new WhatsAppChannel();

    send(to: string, message: string): void {
        if (!this.channel.validate(to)) {
            console.log("Número de WhatsApp inválido (debe incluir +)");
            return;
        }
        console.log(`Enviando WHATSAPP a ${to}: ${message}`);
    }
}
