export class ConexionDB implements IConexionDB {
    private static instance: ConexionDB;
    private host: string;
    private port: number;
    private user: string;
    private connected: boolean = false;

    private constructor(host: string, port: number, user: string) {
        this.host = host;
        this.port = port;
        this.user = user;
    }

    public static getInstance(host = "localhost", port = 5432, user = "admin"): ConexionDB {
        if (!ConexionDB.instance) {
            ConexionDB.instance = new ConexionDB(host, port, user);
        }
        return ConexionDB.instance;
    }

    public connect(): void {
        if (!this.connected) {
            console.log(`Conectando a DB en ${this.host}:${this.port} como ${this.user}...`);
            this.connected = true;
        } else {
            console.log("Ya está conectado a la base de datos.");
        }
    }

    public disconnect(): void {
        if (this.connected) {
            console.log("Desconectando de la base de datos...");
            this.connected = false;
        } else {
            console.log("No hay conexión activa.");
        }
    }

    public getInfo(): string {
        return `ConexionDB(${this.host}:${this.port}, user=${this.user})`;
    }
}
