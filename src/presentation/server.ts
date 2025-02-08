import { CronService } from './cron/cron-service';
import { CheckService } from './domain/use-cases/checks/check-service';

export class Server {
    static start() {
        const onTick = () => { new CheckService().execute('www.google.com') };
        CronService.createJob('*/5 * * * * *', onTick);
    }
}