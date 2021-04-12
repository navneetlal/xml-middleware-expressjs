import { Request, Response, NextFunction } from 'express';
import {
  Parser as XmlParser,
  Builder as XmlBuilder,
  ParserOptions,
} from 'xml2js';
import ServerResponse from './response';

declare global {
  namespace Express {
    export interface Response {
      /**
       * Send a response
       *
       * Examples:
       *
       *      res.sendResponse({ some: 'json' })
       *      res.sendResponse(400, 'Sorry, cant find that')
       *
       * @param status HTTP response status codes
       * @param data
       */
      sendResponse(status: number, data: ServerResponse): any;
    }
  }
}

const xmlJsonMiddleware = (options: ParserOptions = {}) => {
  return function middleware(req: Request, res: Response, next: NextFunction) {
    res.sendResponse = (status: number = 200, data: ServerResponse) => {
      res.format({
        json: () => {
          res.status(status).send(data);
        },
        xml: () => {
          try {
            const builder = new XmlBuilder();
            const xml = builder.buildObject(data);
            res.status(status).send(xml);
          } catch (error) {
            next(error)
          }
        },
        default: () => {
          res.status(406).send('Not Acceptable');
        },
      });
    };
    if (req.is(['xml', '+xml', 'text/xml'])) {
      if (typeof req.body !== 'string') next();
      const xmlParser = new XmlParser({
        async: true,
        explicitArray: false,
        ...options,
      });
      xmlParser.parseString(req.body, (err: any, xml: any) => {
        if (err) next(err);
        req.body = xml || req.body;
        next();
      });
    } else next();
  };
};

export default xmlJsonMiddleware;
