import * as HttpResponse from '../../utils/http-helper';
import { PlayerModel } from '../models/player-model';
import * as PlayerRespository from '../repositories/players-repository';

export const getPlayerService = async () => {
   const data = await PlayerRespository.findAllPlayers();
   let response = null;

   if (data) {
      response = await HttpResponse.ok(data);
   } else {
      response = await HttpResponse.noContent();
   }
   return { response };
};

export const getPlayerByIdService = async (id: number) => {
   const data = await PlayerRespository.findPlayerById(id);
   let response = null;

   if (data) {
      response = await HttpResponse.ok(data);
   } else {
      response = await HttpResponse.noContent();
   }
   return { response };
};

export const createPlayerService = async (player: PlayerModel) => {
   let response = null;

   if (Object.keys(player).length !== 0) {
      await PlayerRespository.insertPlayer(player);
      response = HttpResponse.created();
   } else {
      response = await HttpResponse.badRequest();
   }
   return response;
};

export const deletePlayerService = async (id: number) => {
   let response = null;

   const isDeleted = await PlayerRespository.deleteOnePlayer(id);

   if (isDeleted) {
      response = await HttpResponse.ok('Player deleted successfully');
   } else {
      response = await HttpResponse.badRequest();
   }
   return response;
};

export const updatePlayerService = async (id: number, player: PlayerModel) => {
   let response = null;

   const data = await PlayerRespository.updateOnePlayer(id, player);

   if (Object.keys(player).length === 0) {
      response = await HttpResponse.badRequest();
   } else {
      response = await HttpResponse.ok(data);
   }
   return response;
};
