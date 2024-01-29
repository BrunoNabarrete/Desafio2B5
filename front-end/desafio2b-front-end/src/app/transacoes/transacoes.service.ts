import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transacoes } from './transacoes';

@Injectable({
  providedIn: 'root'
})
export class TransacoesService {

  constructor( private http:HttpClient) { }

  private url = 'http://localhost:8080/transacoes';

  public recuperarTransacoes():Observable<Transacoes[]>{

    return this.http.get<Transacoes[]>(this.url);
  }

  public deletarTransacao(id: number):Observable<any>{
    console.log(id)
    return this.http.delete(this.url+"?id="+id);
  }

  public editarTransacao(transacao: Transacoes):Observable<any>{
    return this.http.put(this.url, transacao);
  }

  public adicionarTransacao(transacao: Transacoes):Observable<any>{
    return this.http.post(this.url, transacao);
  }

}
