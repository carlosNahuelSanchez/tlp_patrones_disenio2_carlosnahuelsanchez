import { NotifierFactory } from "./clases/NotifierFactory";

export function runFactory() {
    const canales: ("email" | "sms" | "whatsapp")[] = ["email", "sms", "whatsapp"];

    // Datos válidos e inválidos
    const datosDePrueba = {
        email: ["usuario@correo.com", "usuario@correo"],
        sms: ["1234567890", "12345abc"],
        whatsapp: ["+541112345678", "541112345678"]
    };

    canales.forEach((canal) => {
        console.log(`\nProbando canal: ${canal.toUpperCase()}`);

        const notifier = NotifierFactory.create(canal);

        datosDePrueba[canal].forEach((destino) => {
            const mensaje = `Mensaje de prueba para ${canal}`;
            notifier.send(destino, mensaje);
        });
    });
}
