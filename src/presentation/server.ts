import 'dotenv/config';
import { LogRepository } from '../infrastructure/repositories/log.repository';
import { CronService } from './cron/cron-service';
import { CheckService } from './domain/use-cases/checks/check-service';
import { MongoDataSource } from '../infrastructure/data-sources/mongo.data-source';

const logRepository = new LogRepository(new MongoDataSource());

export class Server {
    static start() {
        const onTick = () => { new CheckService(logRepository).execute('https://www.google.com') };
        CronService.createJob('*/5 * * * * *', onTick);

        //const e = new EmailService();
        //e.sendEmail({ to: 'dmz866@hotmail.com', subject: 'shi', htmlBody: '<h1>Shi</hi>' });
    }
}