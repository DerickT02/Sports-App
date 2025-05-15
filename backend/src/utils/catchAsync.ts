import { RequestHandler } from 'express';

/**
 * Wrap an async route-handler so unhandled errors bubble to `next(err)`.
 */
export const catchAsync =
  (fn: RequestHandler): RequestHandler =>
  (req, res, next) => {
    // eslint-disable-next-line promise/no-callback-in-promise
    Promise.resolve(fn(req, res, next)).catch(next);
  };
