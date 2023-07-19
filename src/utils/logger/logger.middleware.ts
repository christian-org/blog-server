import { Request, Response, NextFunction } from "express";

export function logger(req: Request, res: Response, next: NextFunction) {
  //TODO: winston 이용해서 logger 붙이기
  // console.log(`Request...`);
  next();
}
