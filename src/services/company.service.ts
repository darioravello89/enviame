import 'reflect-metadata';
import Container, { Service, Inject } from 'typedi';
import { Company, PrismaClient } from '@prisma/client';
import { Logger } from 'winston';
import { TEMPORARY_USER_DEFAULT } from '../utils/constants';

@Service()
export default class CompanyService {
    // TODO: Fix DI
    constructor(
        @Inject('logger') private logger: Logger,
        @Inject('prisma') private prisma: PrismaClient) {}

    public async GetAllCompany(): Promise<Company[]> {
        try {
            const prisma: PrismaClient = Container.get('prisma');
            const companyesRecord: Company[] = await prisma.company.findMany({
                where: {
                    Deleted: false
                }
            });

            if (!companyesRecord.length) {
                throw new Error('Cannot find Companies');
            }

            return companyesRecord;
        } catch (e) {
            throw new Error('Cannot find companies');
        }
    }

    public async GetCompany(companyID: number): Promise<Company> {
        try {
            const prisma: PrismaClient = Container.get('prisma');
            const logger: Logger = Container.get('logger');

            logger.silly('Getting Company db record');
            const CompanyRecord: Company = await prisma.company.findFirst({
                where: {
                    ID_Company: companyID,
                    Deleted: false
                }
            });

            if (!CompanyRecord) {
                throw new Error('Cannot find Company');
            }

            logger.silly(`Created Company db record with ID: ${CompanyRecord.ID_Company}`);
            return CompanyRecord;
        } catch (e) {
            throw new Error('Company cannot be selected');
        }
    }

    public async CreateCompany(companyInput: ICompany): Promise<Company> {
        try {
            const prisma: PrismaClient = Container.get('prisma');
            const logger: Logger = Container.get('logger');

            logger.silly('Creating Company db record');
            // TODO: Get user from token JWT
            const companyRecord : Company = await prisma.company.create({
                data: {
                    Name: companyInput.Name,
                    Address: companyInput.Address,
                    Insert_User: TEMPORARY_USER_DEFAULT,
                    Insert_Date: new Date()
                }
            });

            if (!companyRecord) {
                throw new Error('Company cannot be created');
            }

            logger.silly(`Created Company db record with ID: ${companyRecord.ID_Company}`);
            return companyRecord;
        } catch (e) {
            throw new Error('Company cannot be created');
        }
    }

    public async UpdateCompany(companyId: number, companyInput: ICompany) : Promise<Company> {
        try {
            const prisma: PrismaClient = Container.get('prisma');
            const logger: Logger = Container.get('logger');

            logger.silly('Updating Company db record');
            // TODO: Get user from token JWT
            const companyRecord: Company = await prisma.company.update({
                where: { ID_Company: companyId },
                data: {
                    Name: companyInput.Name,
                    Address: companyInput.Address,
                    Update_User: TEMPORARY_USER_DEFAULT,
                    Update_Date: new Date()
                }
            });

            if (!companyRecord) {
                throw new Error('Company cannot be updated');
            }

            logger.silly(`Updated Company db record with ID: ${companyRecord.ID_Company}`);
            return companyRecord;
        } catch (e) {
            throw new Error('Company cannot be updated');
        }
    }

    public async DeleteCompany(companyId: number) : Promise<Company> {
        try {
            const prisma: PrismaClient = Container.get('prisma');
            const logger: Logger = Container.get('logger');

            logger.silly('Deleting Company db record');
            // TODO: Get user from token JWT
            const companyRecord : Company = await prisma.company.update({
                where: { ID_Company: companyId },
                data: {
                    Deleted: true,
                    Update_User: TEMPORARY_USER_DEFAULT,
                    Update_Date: new Date()
                }
            });

            if (!companyRecord) {
                throw new Error('Company cannot be deleted');
            }

            logger.silly(`Deleted Company db record with ID: ${companyRecord.ID_Company}`);
            return companyRecord;
        } catch (e) {
            throw new Error('Company cannot be deleted');
        }
    }
}