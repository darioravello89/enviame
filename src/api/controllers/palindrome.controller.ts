import { NextFunction, Request, Response } from "express";
import { reverseString, subCompare } from "../../utils/string.util";

export async function getPalindromes(req: Request, res: Response, next: NextFunction) {
    try {
        const text: string = req.body.Text;
        const minSubstringLength: number = req.body.MinSubstringLength;
        const textReversed = reverseString(text);

        const result = subCompare(text, textReversed, minSubstringLength);
        return res.status(200).json({ result });

    } catch (e) {
        throw new Error(e);
    }
}