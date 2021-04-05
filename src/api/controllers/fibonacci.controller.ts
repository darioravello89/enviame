import { NextFunction, Request, Response } from "express";
import { getFibonaccisSerie} from "../../utils/fibonacci.util";

export async function getFibonaccis(req: Request, res: Response, next: NextFunction) {
    try {
        const result = getFibonaccisSerie();
        return res.status(200).json({ result });

    } catch (e) {
        throw new Error(e);
    }
}