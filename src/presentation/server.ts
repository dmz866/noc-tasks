import { FileSystemDataSource } from '../infrastructure/data-sources/file-system.data-source';
import { LogRepository } from '../infrastructure/repositories/log.repository';
import { CronService } from './cron/cron-service';
import { CheckService } from './domain/use-cases/checks/check-service';

const logRepository = new LogRepository(new FileSystemDataSource());

export class Server {
    static start() {
        const onTick = () => { new CheckService(logRepository).execute('https://www.google.com') };
        CronService.createJob('*/5 * * * * *', onTick);
    }
}