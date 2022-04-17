import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-picture',
  templateUrl: './product-picture.component.html',
  styleUrls: ['./product-picture.component.css']
})
export class ProductPictureComponent implements OnInit {

  @Input() name! : String;

  @Input()
  get name2(): string { return this._name2; }
  set name2(name2: string) {
    this._name2 = (name2 && name2.toUpperCase()) || '<no name2 set>';
  }
  private _name2 = '';

  constructor() { }

  ngOnInit(): void {
      //TODO: call set()
  }

}
