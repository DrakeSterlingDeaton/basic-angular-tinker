import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionComponentComponent } from './version-component.component';

describe('VersionComponentComponent', () => {
  let component: VersionComponentComponent;
  let fixture: ComponentFixture<VersionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersionComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
