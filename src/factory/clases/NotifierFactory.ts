import { EmailNotifier } from "./EmailNotifier";
import { SMSNotifier } from "./SmsNotifier";
import { WhatsappNotifier } from "./WhatsappNotifier";

export class NotifierFactory {
    static create(channel: "email" | "sms" | "whatsapp"): INotifier {
        switch (channel) {
            case "email":
                return new EmailNotifier();
            case "sms":
                return new SMSNotifier();
            case "whatsapp":
                return new WhatsappNotifier();
            default:
                throw new Error("Canal de notificación no soportado");
        }
    }
}
