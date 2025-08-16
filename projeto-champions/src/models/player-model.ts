export interface PlayerModel {
   id: number;
   name: string;
   age: number;
   nationality: string;
   position: 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Forward';
   club: string;
   rating: number; // de 0 a 100
   isCaptain: boolean;
}
