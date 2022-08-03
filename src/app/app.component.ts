import { TransferenceService } from './services/transference.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private service: TransferenceService){};

  transferLocal($event){
    this.service.transferLocal($event);
  }

  showModalError($event){
    console.log($event);
  }
}
