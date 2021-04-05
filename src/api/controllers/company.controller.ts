import { Company } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import Container from "typedi";
import { Logger } from "winston";
import CompanyService from "../../services/company.service";

export async function getCompanies(req: Request, res: Response, next: NextFunction) {
    const logger: Logger = Container.get('logger');
    try {
        logger.silly('Calling /companies endpoint');
        const companyServiceInstance = Container.get(CompanyService);
        const companies: Company[] = await companyServiceInstance.GetAllCompany();

        if (!companies.length) {
            return res.status(404).json({ error: 'Companies not found' });
        }
        return res.status(200).json({ companies });
    } catch (e) {
        logger.error('❌ error: %o', e);
        return next(e);
    }
}

export async function getCompany(req: Request, res: Response, next: NextFunction) {
    const logger: Logger = Container.get('logger');
    const idCompany: number = Number(req.params.id);
    try {
        logger.silly('Calling /companys endpoint with body: %o', req.body);
        const companyServiceInstance = Container.get(CompanyService);
        const company: Company = await companyServiceInstance.GetCompany(idCompany);

        if (!company) {
            return res.status(404).json({ error: 'Company not found' });
        }
        return res.status(200).json({ company });
    } catch (e) {
        logger.error('❌ error: %o', e);
        return next(e);
    }
}

export async function createCompany(req: Request, res: Response, next: NextFunction) {
    const logger: Logger = Container.get('logger');
    try {
        logger.silly('Calling /companys endpoint with body: %o', req.body);
        const companyServiceInstance: CompanyService = Container.get(CompanyService);
        const company: Company = await companyServiceInstance.CreateCompany(req.body as ICompany);
        return res.status(201).json(company);
    } catch (e) {
        logger.error('❌ error: %o', e);
        return next(e);
    }
}

export async function updateCompany(req: Request, res: Response, next: NextFunction) {
    const logger: Logger = Container.get('logger');
    const id = Number(req.params.id);
    try {
        logger.silly('Calling /companys/:id endpoint with body: %o', req.body);
        const companyServiceInstance: CompanyService = Container.get(CompanyService);
        const company: Company = await companyServiceInstance.UpdateCompany(id, req.body as ICompany);
        return res.status(200).json(company);
    } catch (e) {
        logger.error('❌ error: %o', e);
        return next(e);
    }
}

export async function deleteCompany(req: Request, res: Response, next: NextFunction) {
    const logger: Logger = Container.get('logger');
    const id = Number(req.params.id);
    try {
        logger.silly('Calling /companys/:id endpoint with body: %o', req.body);
        const companyServiceInstance: CompanyService = Container.get(CompanyService);
        const company: Company = await companyServiceInstance.DeleteCompany(id);
        return res.status(200).json(company);
    } catch (e) {
        logger.error('❌ error: %o', e);
        return next(e);
    }
}
