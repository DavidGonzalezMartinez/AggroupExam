import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../Models/Cliente';
import { Global } from '../services/global';

@Injectable()
export class ClienteService {
  private url: string;
  constructor(private _httpClient: HttpClient) {
    this.url = Global._apiURL;
  }

  public getClientes(): Observable<any> {
    return this._httpClient.get(this.url + '/clientes');
  }
}
