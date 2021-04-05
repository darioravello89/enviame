import { PrismaClient, Prisma } from '@prisma/client';
import companyData from './company.data.json';

export async function CompanyInitialize(prismaClient : PrismaClient, insertUser : string) {
    try {
        if (!companyData.length) {
            console.log('Company records created: 0');
            return;
        } 
        for (let index = 0; index < companyData.length; index++) {
            await prismaClient.company.upsert({
                where: { 
                    ID_Company: companyData[index].ID_Company
                },
                update: {
                    Name: companyData[index].Name,
                    Address: companyData[index].Address,
                    Deleted: false,
                    Insert_Date: new Date(),
                    Insert_User: insertUser
                },
                create: {
                    Name: companyData[index].Name,
                    Address: companyData[index].Address,
                    Deleted: false,
                    Update_Date: new Date(),
                    Update_User: insertUser
                },
            });
        }
        console.log(`Company records created: ${companyData.length}`);
    } catch (error) {
        console.error(`Company error: ${error}`);
    }
}