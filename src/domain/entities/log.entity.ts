export class LogEntity {
    level: LogSeverityLevel;
    message: string;
    createAt: Date;

    constructor(level: LogSeverityLevel, message: string) {
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