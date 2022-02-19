import axios from 'axios';
import type { ISigninResponse } from './interfaces';

const host = 'http://127.0.0.1:3010/api/v1'

export class AccountApi {
  private instance: AccountApi;

  constructor() {
    if (this.instance) this.instance = new AccountApi;
    return this.instance;
  }

  async signin(login: string, password: string): Promise<ISigninResponse> {
    const result = await axios.post(host + '/account/sign-in');
    return result.data;
  }
}