import { Router } from 'express';
import companyRoute from './routes/company.route';
import palindromeRoute from './routes/palindrome.route';
import fibonacciRoute from './routes/fibonacci.route';

// guaranteed to get dependencies
export default (): Router => {

	// TODO: Add headers and cors
	const app = Router();
	companyRoute(app);
	palindromeRoute(app);
	fibonacciRoute(app);
	return app;
}