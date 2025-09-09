import { ConexionDB } from "./clases/ConexionDB";

export function runSingleton() {
    const db: IConexionDB = ConexionDB.getInstance();
    db.connect();
    console.log(db.getInfo());
    db.disconnect();
}