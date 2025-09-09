import { Student } from "./clases/Student";
import { Professor } from "./clases/Professor";

export function runObserver() {
    const alumno1 = new Student("Juan");
    const alumno2 = new Student("María");
    const alumno3 = new Student("Pedro");

    // Crear profesor
    const profe = new Professor();

    // Suscribir alumnos
    profe.subscribe(alumno1);
    profe.subscribe(alumno2);
    profe.subscribe(alumno3);

    // Publicar primera tarea
    console.log("\n--- Publicando Tarea 1 ---");
    profe.publish("Tarea 1: Leer capítulo 1");

    // Dar de baja a un alumno
    profe.unsubscribe(alumno2);

    // Publicar segunda tarea
    console.log("\n--- Publicando Tarea 2 ---");
    profe.publish("Tarea 2: Resolver ejercicios 5 al 10");
}
