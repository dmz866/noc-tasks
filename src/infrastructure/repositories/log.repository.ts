import { LogBaseDataSource } from '../../domain/data-sources/log-base.data-source';
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { LogBaseRepository } from "../../domain/repositories/log-base.repository";

export class LogRepository implements LogBaseRepository {

    constructor(private logDataSource: LogBaseDataSource) {
    }

    saveLog(log: LogEntity) {
        this.logDataSource.saveLog(log);
    }

    getLogs(level: LogSeverityLevel) {
        return this.logDataSource.getLogs(level);
    }
}