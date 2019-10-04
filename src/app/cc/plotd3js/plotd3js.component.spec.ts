import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plotd3jsComponent } from './plotd3js.component';

describe('Plotd3jsComponent', () => {
  let component: Plotd3jsComponent;
  let fixture: ComponentFixture<Plotd3jsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plotd3jsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plotd3jsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
