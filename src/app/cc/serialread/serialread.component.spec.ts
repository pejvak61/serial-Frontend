import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialreadComponent } from './serialread.component';

describe('SerialreadComponent', () => {
  let component: SerialreadComponent;
  let fixture: ComponentFixture<SerialreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerialreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerialreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
