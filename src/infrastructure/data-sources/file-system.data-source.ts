import fs from 'fs';
import { LogBaseDataSource } from "../../domain/data-sources/log-base.data-source";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";

export class FileSystemDataSource implements LogBaseDataSource {
    private readonly logsPath = 'logs/';
    private readonly allLogsPath = 'logs/logs-all.log';
    private readonly mediumLogsPath = 'logs/logs-medium.log';
    private readonly highLogsPath = 'logs/logs-high.log';

    constructor() {
        this.createLogsFiles();
    }

    private createLogsFiles() {
        if (!fs.existsSync(this.logsPath)) {
            fs.mkdirSync(this.logsPath);
        }

        [
            this.allLogsPath,
            this.mediumLogsPath,
            this.highLogsPath
        ].forEach(p => {
            if (!fs.existsSync(p)) {
                fs.writeFileSync(p, '');
            }
        });
    }

    saveLog(log: LogEntity): void {
        const logAsJson = `${JSON.stringify(log)}\n`;
        fs.appendFileSync(this.allLogsPath, logAsJson);

        if (log.level === LogSeverityLevel.medium) {
            fs.appendFileSync(this.mediumLogsPath, logAsJson);
        }
        else if (log.level === LogSeverityLevel.high) {
            fs.appendFileSync(this.highLogsPath, logAsJson);
        }
    }

    getLogs(level: LogSeverityLevel) {
        let path;

        switch (level) {
            case LogSeverityLevel.medium:
                path = this.mediumLogsPath;
                break;
            case LogSeverityLevel.high:
                path = this.highLogsPath;
                break;
            default:
                path = this.allLogsPath;
                break;
        }

        const logs = JSON.parse(fs.readFileSync(path, 'utf-8')) as LogEntity[];
        return logs;
    }
}