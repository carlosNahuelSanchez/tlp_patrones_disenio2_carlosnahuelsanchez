export class Student implements ISubscriber {
    studentName: string;

    constructor(studentName: string) {
        this.studentName = studentName;
    }
    
    update(message: string): void {
        console.log(`Notificación para ${this.studentName}: ${message}`);
    }
}
