export default class AppError extends Error {
    public readonly statusCode: number;
    public readonly isOperational = true;
  
    constructor(message: string, statusCode = 500) {
      super(message);
      this.statusCode = statusCode;
      Error.captureStackTrace(this, this.constructor);
    }
  }
  