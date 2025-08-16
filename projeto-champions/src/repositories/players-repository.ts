import { PlayerModel } from '../models/player-model';

const database: PlayerModel[] = [
   {
      id: 1,
      name: 'Lionel Messi',
      age: 37,
      nationality: 'Argentina',
      position: 'Forward',
      club: 'Inter Miami',
      rating: 94,
      isCaptain: true,
   },
   {
      id: 2,
      name: 'Virgil van Dijk',
      age: 33,
      nationality: 'Netherlands',
      position: 'Defender',
      club: 'Liverpool',
      rating: 89,
      isCaptain: true,
   },
   {
      id: 3,
      name: 'Kevin De Bruyne',
      age: 34,
      nationality: 'Belgium',
      position: 'Midfielder',
      club: 'Manchester City',
      rating: 91,
      isCaptain: false,
   },
   {
      id: 4,
      name: 'Alisson Becker',
      age: 32,
      nationality: 'Brazil',
      position: 'Goalkeeper',
      club: 'Liverpool',
      rating: 88,
      isCaptain: false,
   },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
   return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
   return database.find((player) => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
   database.push(player);
};

export const deleteOnePlayer = async (id: number) => {
   const idx = database.findIndex((player) => player.id === id);

   if (idx !== -1) {
      database.splice(idx, 1);
      return true;
   }
   return false;
};

export const updateOnePlayer = async (id: number, player: PlayerModel) => {
   const idx = database.findIndex((player) => player.id === id);

   if (idx !== -1) {
      database[idx] = player;
   }
};
