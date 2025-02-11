import { PrismaClient } from '@prisma/client';
import { LogBaseDataSource } from "../../domain/data-sources/log-base.data-source";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";

export class PostgresDataSource implements LogBaseDataSource {
    private prisma = new PrismaClient();

    constructor() {
    }

    async saveLog(log: LogEntity) {
        const newLog = await this.prisma.logModel.create({
            data: {
                level: log.level as any,
                message: log.message,
                createdAt: log.createAt
            }
        });

        console.log(`new log ${newLog.id} created!`)
    }

    async getLogs(level: LogSeverityLevel) {
        const result = await this.prisma.logModel.findMany({ where: { level: level as any } })

        return result.map(LogEntity.fromObject);
    }

}