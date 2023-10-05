import axios from 'axios';

export const instance = axios.create();

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 403) {
      // redirect to 403 page
      window.location.href = '/403';
    }
  },
);

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
