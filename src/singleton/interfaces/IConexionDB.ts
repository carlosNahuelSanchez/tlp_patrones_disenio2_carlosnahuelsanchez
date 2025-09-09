interface IConexionDB {
    connect(): void;
    disconnect(): void;
    getInfo(): string;
}
