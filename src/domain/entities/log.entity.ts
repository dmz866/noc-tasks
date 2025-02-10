interface IOptions {
    level: LogSeverityLevel;
    message: string;
}

export class LogEntity {
    level: LogSeverityLevel;
    message: string;
    createAt: Date;

    constructor({ level, message }: IOptions) {
        this.level = level;
        this.message = message;
        this.createAt = new Date();
    }
}

export enum LogSeverityLevel {
    low = 'low',
    medium = 'medium',
    high = 'high'
}