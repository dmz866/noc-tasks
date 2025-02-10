import 'dotenv/config';
import { MongoDatabase } from '../data/mongo';
import { FileSystemDataSource } from '../infrastructure/data-sources/file-system.data-source';
import { LogRepository } from '../infrastructure/repositories/log.repository';

const logRepository = new LogRepository(new FileSystemDataSource());

export class Server {
    static start() {
        //const onTick = () => { new CheckService(logRepository).execute('https://www.google.com') };
        //CronService.createJob('*/5 * * * * *', onTick);

        //const e = new EmailService();
        //e.sendEmail({ to: 'dmz866@hotmail.com', subject: 'shi', htmlBody: '<h1>Shi</hi>' });

        MongoDatabase.connect(process.env.MONGO_URL!, process.env.MONGO_DB_NAME!);
    }
}