import { Router } from 'express';
import CompanyValidation from '../validations/company.validation';
import * as CompanyController from '../controllers/company.controller';
import * as ShippingController from '../controllers/shipping.controller';

const route = Router();

export default (app: Router) => {

    app.use('/companies', route);

    // TODO: Add middlewares for jwt validation and currentuser

    /**
     * Return the companies list when `/companies/` route is requested
     *
     * @param request - Object - Express request object
     * @param response - Object - Express response object
     * @param next - Function - express callback
     *
     * @returns {Company[]}
     */
    route.get('/', CompanyController.getCompanies);

    /**
     * Return the company when `/companies/:id` route is requested
     *
     * @param request - Object - Express request object
     * @param response - Object - Express response object
     * @param next - Function - express callback
     *
     * @returns {Company}
     */
    route.get('/:id', CompanyController.getCompany);

    /**
     * Create the company when post to `/companies/` route is requested
     *
     * @param request - Object - Express request object
     * @param response - Object - Express response object
     * @param next - Function - express callback
     *
     * @returns {Company}
     */
    route.post('/', CompanyValidation.createCompanyValidation, CompanyController.createCompany);

    /**
     * Delete the company when delete to `/companies/` route is requested
     *
     * @param request - Object - Express request object
     * @param response - Object - Express response object
     * @param next - Function - express callback
     *
     * @returns {Company}
     */
    route.delete('/:id', CompanyController.deleteCompany);

    /**
     * Update the company when put to `/companies/` route is requested
     *
     * @param request - Object - Express request object
     * @param response - Object - Express response object
     * @param next - Function - express callback
     *
     * @returns {Company}
     */
    route.put('/:id', CompanyValidation.updateCompanyValidation, CompanyController.updateCompany);

    /**
     * Update the company when put to `/companies/` route is requested
     *
     * @param request - Object - Express request object
     * @param response - Object - Express response object
     * @param next - Function - express callback
     *
     * @returns {Company}
     */
    route.put('/:id', CompanyValidation.updateCompanyValidation, CompanyController.updateCompany);

    /**
     * Return the company when `/companies/:id` route is requested
     *
     * @param request - Object - Express request object
     * @param response - Object - Express response object
     * @param next - Function - express callback
     *
     * @returns {Company}
     */
    route.post('/:id/deliveries', CompanyValidation.saveCompanyValidation, ShippingController.saveShipping);

};
