export interface IEmail {
    address: string;
    topic: string;
    message: string;
}

export class Email implements IEmail{
    public address: string;
    public topic: string;
    public message: string;
    constructor( adress: string, topic: string, message: string){ 
    }
}