import 'dotenv/config';
import { PostgresDataSource } from '../infrastructure/data-sources/postgres.data-source';
import { LogRepository } from '../infrastructure/repositories/log.repository';
import { CronService } from './cron/cron-service';
import { CheckService } from './domain/use-cases/checks/check-service';

//const logRepository = new LogRepository(new MongoDataSource());
const logRepository = new LogRepository(new PostgresDataSource());

export class Server {
    static start() {
        const onTick = () => { new CheckService(logRepository).execute('https://www.google.com') };
        CronService.createJob('*/5 * * * * *', onTick);

        //const e = new EmailService();
        //e.sendEmail({ to: 'dmz866@hotmail.com', subject: 'shi', htmlBody: '<h1>Shi</hi>' });
    }
}