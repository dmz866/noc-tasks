import { LogModel } from '../../data/mongo/models/log.model';
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

    static fromObject(model: { [key: string]: any }) {
        return new LogEntity({ level: model.level, message: model.message });
    }
}

export enum LogSeverityLevel {
    low = 'low',
    medium = 'medium',
    high = 'high'
}