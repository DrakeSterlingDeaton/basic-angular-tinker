import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-version-child',
  template: `
    <h3>Version {{major}}.{{minor}}</h3>
    <h4>Change log:</h4>
    <ul>
      <li *ngFor="let change of changeLog">{{change}}</li>
    </ul>
    <button (click)="emitThis()">Emit Event to Parent</button>
  `
})
export class VersionChildComponent implements OnChanges {
  @Input() major = 0;
  @Input() minor = 0;
  changeLog: string[] = [];
  @Output() event = new EventEmitter<boolean>();

  ngOnChanges(changes: SimpleChanges) {
    // example of how ngOnChanges works
    const log: string[] = [];
    console.log("changes is:");
    console.log(changes);
    for (const propName in changes) {
      console.log("propName:");
      console.log(propName);
      const changedProp = changes[propName];
      const to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        const from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }

  emitThis() {
    this.event.emit(true);
  }
}