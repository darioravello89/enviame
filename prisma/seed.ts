import { PrismaClient } from '@prisma/client'
import { CompanyInitialize } from './initialData/Company/company.seed';
const prisma = new PrismaClient()

async function main() {
    const insertUser: string = 'sysadmin';
    await CompanyInitialize(prisma, insertUser);
    console.log('The database was seeded')
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })