import { LogModel, MongoDatabase } from "../../data/mongo";
import { LogBaseDataSource } from "../../domain/data-sources/log-base.data-source";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";

export class MongoDataSource implements LogBaseDataSource {
    constructor() {
        MongoDatabase.connect(process.env.MONGO_URL!, process.env.MONGO_DB_NAME!);
    }

    async saveLog(log: LogEntity) {
        const newLog = await LogModel.create(log);
        await newLog.save();
        console.log(`new log ${newLog.id} created!`)
    }

    async getLogs(level: LogSeverityLevel) {
        const result = await LogModel.find({ level });

        return result.map(LogEntity.fromObject);
    }

}