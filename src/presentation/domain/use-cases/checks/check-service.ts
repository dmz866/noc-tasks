import { LogEntity, LogSeverityLevel } from '../../../../domain/entities/log.entity';
import { LogBaseRepository } from '../../../../domain/repositories/log-base.repository';

export class CheckService {
    constructor(private logRepository: LogBaseRepository) {
    }

    async execute(url: string) {
        try {
            const result = await fetch(url);

            if (!result.ok) {
                throw Error(`Error on check service ${url}`)
            }

            const log = new LogEntity({ level: LogSeverityLevel.low, message: `${url} is working!` });
            this.logRepository.saveLog(log);

            return true;
        }
        catch (error) {
            const log = new LogEntity({ level: LogSeverityLevel.high, message: `${url} is not working :(` });
            this.logRepository.saveLog(log);

            return false;
        }
    }
}