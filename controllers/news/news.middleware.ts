import express from 'express';
import {validationResult} from 'express-validator';
class NewsMiddleware {
    verifyBodyFieldsErros = async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        const error = validationResult(req);
        if(!error.isEmpty())
        {
            return res.status(400).send({error: error.array()});
        }
        next();
    }
}

export default new NewsMiddleware();