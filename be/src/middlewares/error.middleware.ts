import HttpException from '../exceptions/HttpException';
import { Request, Response, NextFunction } from 'express';

function errorMiddleware(error: Error, request: Request, response: Response, next: NextFunction) {
  console.error(error);

  if (error instanceof HttpException) {
    const status: number = error.status || 500;
    const message = error.message || 'something went wrong';
    response.status(status).send({ status, message });
  } else {
    response.status(500).send({ status: 500, message: 'something went wrong' });
  }
}

export default errorMiddleware;
