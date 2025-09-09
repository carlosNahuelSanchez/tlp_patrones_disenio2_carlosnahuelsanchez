class SMSChannel implements IChannel {
    name = "sms";

    validate(to: string): boolean {
        const phoneRegex = /^\d{10,15}$/;
        return phoneRegex.test(to);
    }
}

export class SMSNotifier implements INotifier {
    channel: IChannel = new SMSChannel();

    send(to: string, message: string): void {
        if (!this.channel.validate(to)) {
            console.log("Número de teléfono inválido");
            return;
        }
        console.log(`Enviando SMS a ${to}: ${message}`);
    }
}
