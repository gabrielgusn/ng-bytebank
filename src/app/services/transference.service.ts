import { Transference } from './transference.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenceService {

  private transferenceList: any[];
  private url = 'http://localhost:3000/transferences';

  constructor(private httpClient: HttpClient) {
    this.transferenceList = [];
  }

  get transferences(){
    return this.transferenceList;
  }

  allTransferences(): Observable<Transference[]>{
    return this.httpClient.get<Transference[]>(this.url);
  }

  transferLocal(transference: Transference): Observable<Transference>{
    this.feedData(transference);
    // this.transferenceList.push(transference); //before API integration
    return this.httpClient.post<Transference>(this.url, transference);
  }

  private feedData(transference: any){
    transference.date = new Date();
  }

}
