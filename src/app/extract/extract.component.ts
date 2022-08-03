import { Component, Input, OnInit } from '@angular/core';
import { TransferenceService } from '../services/transference.service';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {

  transferences: any[];

  constructor(private service: TransferenceService) { }

  ngOnInit() {
    this.transferences = this.service.transferences;
  }

}
