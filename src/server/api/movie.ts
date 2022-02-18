import axios from 'axios';
import type { IPage } from '../common/interfaces';
import type { IMovie } from './interfaces';

const host = 'http://127.0.0.1:3010/api/v1'

export class MoviesApi {
  private instance: MoviesApi;

  constructor() {
    if (this.instance) this.instance = new MoviesApi;
    return this.instance;
  }

  async getMoviesList(): Promise<IPage<IMovie>> {
    const data =  await axios.get<IPage<IMovie>>(host+'/movie/list');
    return data.data;
  }
}