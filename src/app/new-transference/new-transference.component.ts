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

  transfer(){
    console.log('New transference solicited');

    if(this.isValid()){
      const valueToEmit = { value: this.value, destiny: this.destiny };
      this.whenTransfer.emit(valueToEmit);
      this.clearFields();
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
