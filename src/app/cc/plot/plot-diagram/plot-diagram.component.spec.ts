import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotDiagramComponent } from './plot-diagram.component';

describe('PlotDiagramComponent', () => {
  let component: PlotDiagramComponent;
  let fixture: ComponentFixture<PlotDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
