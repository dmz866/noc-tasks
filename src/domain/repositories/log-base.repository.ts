import { LogEntity, LogSeverityLevel } from "../entities/log.entity";

export abstract class LogBaseRepository {
    saveLog(log: LogEntity) {
    
    }

    getLogs(level: LogSeverityLevel) {
    }
}