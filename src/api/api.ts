import axios from 'axios';
import { log } from 'console';

export const instance = axios.create({
  // baseURL: 'https://www.otgadaymelody.ru/api/',
  baseURL: 'http://localhost:3000/api/',
  withCredentials: true,
});

export const api = {
  async getNextGame() {
    return await instance.get('next-game');
  },
  async getFutureGames() {
    return await instance.get('future-games');
  },
  async getAlbums() {
    return await instance.get('game-albums');
  },
  //
  async getGameForRegistration() {
    try {
      const res = await instance.get('game-registration?gameId=3', {
        params: { offset: 0, limit: 10 },
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  },
};

// export const api = {
//   //
//   async getGameForRegistration() {
//     try {
//       const res = await instance.get('game-registration?gameId=3', {
//         params: { offset: 0, limit: 10 },
//       });
//       console.log(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   },
// };
