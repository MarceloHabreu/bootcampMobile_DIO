import { Request, Response } from 'express';
import * as Service from '../services/players-service';
import { badRequest, noContent } from '../../utils/http-helper';

export const getPlayer = async (req: Request, res: Response) => {
   const data = await Service.getPlayerService();

   res.status(data.response.statusCode).json(data.response.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
   const id = req.params.id;
   const data = await Service.getPlayerByIdService(Number(id));
   res.status(data.response.statusCode).json(data.response.body);
};

export const postPlayer = async (req: Request, res: Response) => {
   const bodyValue = req.body;
   const httpResponse = await Service.createPlayerService(bodyValue);

   if (httpResponse) {
      res.status(httpResponse.statusCode).json(httpResponse.body);
   } else {
      const response = await badRequest();
      res.status(response.statusCode).json(response.body);
   }
};
export const deletePlayer = async (req: Request, res: Response): Promise<void> => {
   const id = parseInt(req.params.id);
   const httpResponse = await Service.deletePlayerService(id);
   res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const updatePlayer = async (req: Request, res: Response): Promise<void> => {
   const id = parseInt(req.params.id);
   const bodyValue = req.body;
   const httpResponse = await Service.updatePlayerService(id, bodyValue);
   res.status(httpResponse.statusCode).json(httpResponse.body);
};
