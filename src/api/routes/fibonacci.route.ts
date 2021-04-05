import { Router } from 'express';
import * as FibonacciController from '../controllers/fibonacci.controller';

const route = Router();

export default (app: Router) => {

    app.use('/fibonacci', route);

    // TODO: Add middlewares for jwt validation and currentuser

    /**
     * Return the palindrome of a string when `/palindrome/` route is requested
     *
     * @param request - Object - Express request object
     * @param response - Object - Express response object
     * @param next - Function - express callback
     *
     * @returns {string}
     */
    route.get('/', FibonacciController.getFibonaccis);

};
