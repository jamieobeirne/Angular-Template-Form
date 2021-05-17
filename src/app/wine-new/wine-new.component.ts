import { Component, OnInit } from '@angular/core';
import { WineNew } from "../models/WineNew";

@Component({
  selector: 'app-wine-new',
  templateUrl: './wine-new.component.html',
  styleUrls: ['./wine-new.component.css']
})
export class WineNewComponent {

  public wineNew: WineNew;
  public confirmed = false; /*defult setting for check box, off*/

  /*constructor() {
    this.wineNew = new WineNew('testWine', 1, 'testURl');
  }*/


  createNewWine(wineForm) {
    console.log('Wine form:', wineForm.value);
    if (wineForm.valid) {
      this.wineNew = wineForm.value.wineNew;
      console.log('Creating new wine ', this.wineNew);
    } else {
      console.error('This new wine form is invalid');
    }
  }
}

