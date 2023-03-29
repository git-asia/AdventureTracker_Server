import {NextFunction, Request, Response} from "express";

export class ValidationError extends Error {
}

export const handleError = (err: Error, req: Request, res: Response) => {
    console.error(err);

    res
        .status(err instanceof ValidationError ? 400 : 500)
        .json({
            message: 'Sorry, please try again later.',
        });
}
