import { Component } from '@angular/core';

@Component({
  selector: 'app-version-component',
  templateUrl: './version-component.component.html',
  styleUrls: ['./version-component.component.css']
})
export class VersionComponentComponent {

  major = 1;
  minor = 23;

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }

  constructor() { }
  
  ngOnInit(): void {
  }

  processChildEvent(childBool: Boolean) {
    alert('Bool from child is:' + childBool);
  }
} 

