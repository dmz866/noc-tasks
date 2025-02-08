import { LogEntity, LogSeverityLevel } from "../entities/log.entity";

export abstract class LogBaseDataSource {
    saveLog(log: LogEntity) {
    }

    getLogs(level: LogSeverityLevel) {
    }
}