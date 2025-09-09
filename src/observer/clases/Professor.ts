export class Professor implements IPublisher {

    private students: ISubscriber[] = [];

    subscribe(subscriber: ISubscriber): void {
        this.students.push(subscriber);
        console.log("alumno suscrito");
    }

    unsubscribe(subscriber: any): void {
        this.students = this.students.filter(s => s !== subscriber);
        console.log("Alumno dado de baja.");
    }
    publish(message: string): void {
        console.log(`Profesor publica: "${message}"`);
        this.students.forEach(student => student.update(message));
    }
}