import { Transference } from './../services/transference.model';
import { TransferenceService } from './../services/transference.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-new-transference',
    templateUrl: './new-transference.component.html',
    styleUrls: ['./new-transference.component.scss']
})
export class NewTransferenceComponent{
  @Output() whenTransfer = new EventEmitter<any>();
  @Output() valuesWithError = new EventEmitter<string>();

  value: number;
  destiny: number;

  constructor(private service: TransferenceService){

  }

  transfer(){
    console.log('New transference solicited');

    if(this.isValid()){
      const valueToEmit: Transference = { value: this.value, destiny: this.destiny };
      this.service.transferLocal(valueToEmit)
      .subscribe(result => {
        console.log(result);
        this.clearFields();
      },
      (error) => console.error(error));
      // this.clearFields();
    }
  }

  private isValid(){
    const valid = this.value > 0;
    if(!valid) this.valuesWithError.emit('Please, inform a valid value');
    return valid;
  }
  clearFields(){
    this.value = null;
    this.destiny = null;
  }
}
