import axios from 'axios';

export const instance = axios.create({
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
};
