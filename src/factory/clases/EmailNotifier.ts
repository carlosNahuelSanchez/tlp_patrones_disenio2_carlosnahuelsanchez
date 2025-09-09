class EmailChannel implements IChannel {
    name = "email";

    validate(to: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(to);
    }
}

export class EmailNotifier implements INotifier {
    channel: IChannel = new EmailChannel();

    send(to: string, message: string): void {
        if (!this.channel.validate(to)) {
            console.log("Email inválido");
            return;
        }
        console.log(`Enviando EMAIL a ${to}: ${message}`);
    }
}
