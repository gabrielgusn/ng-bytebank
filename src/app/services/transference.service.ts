import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenceService {

  private transferenceList: any[];

  constructor() {
    this.transferenceList = [];
  }

  get transferences(){
    return this.transferenceList;
  }

  transferLocal(transference: any){
    // console.log('Evento:', $event);
    this.feedData(transference);
    this.transferenceList.push(transference);
  }

  private feedData(transference: any){
    transference.date = new Date();
  }

}
