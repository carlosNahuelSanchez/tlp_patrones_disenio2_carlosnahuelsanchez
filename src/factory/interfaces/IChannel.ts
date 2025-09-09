interface IChannel {
    name: string;  
    validate(to: string): boolean; 
}
